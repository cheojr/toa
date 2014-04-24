#!/usr/bin.python
import MySQLdb
import re
import os
from UserModel  import *

def getpasswd():
	confirm=""
	toapass=" "
	valid=False
	while (confirm!=toapass or valid==False):
		toapass=raw_input("Enter a password \n")
		confirm=raw_input("Please confirm password\n")
		if confirm!=toapass:
			print("ERROR:passwords dont match, please try again\n")
		#elif re.match('.(?=.{8,})(?=.[a-zA-Z])(?=.[!@#\$%*&]).*$',toapass)==None  :
		elif re.match('.(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#\$%@&\?\* "]).*$',toapass)==None  :
			print "Password not valid, must contain at least 8 characters and at least one number, one letter and one unique character"
		else:
			valid=True
	return toapass 

def checkifuserexists(c):

	c.execute("SELECT EXISTS(SELECT 1 FROM mysql.user WHERE user = 'toadb')")
	a= c.fetchone()
	return a[0]
def createconfigfile(password):

	print "Now enter the following information to create the configuration file\n" 
    	graphpath=raw_input("Enter the complete graph path for TOA (directory must exist, create after instalation if necessary) :\n")

	flowpath=raw_input("Enter path where the Flow files will be located (directory must exist, create after instalation if necessary):\n")

	logspath=raw_input("Enter the  complete path for TOA logs to be saved(directory must exist, create after instalation if necessary):\n")
	
	crontime=raw_input("Enter the new crontime (in unix time) for TOA's script executions (suggested 300):\n")
	oldesttime=raw_input("Enter for how many years will Toa keep data in the database before deleting it, min 1 year  max 5 years (only int) \n")
	oldesttime=int(float(oldesttime)) #round down just incase

	configfile="""
<!-- Warning do not leave spaces in between tags and the data, it will count as part of the data string -->
<config>
        <database>

            <name>Toa</name>

            <auth>

                <user>toadb</user>

                <passwd>%s</passwd>

            </auth>

        </database>




        <logs><path>%s</path></logs>

        <flows><path>%s</path></flows>

        <graphs><path>%s</path></graphs>

        <crontime><time>%s</time></crontime>

	<oldesttime><time>%i</time></oldesttime>
    </config>
	""" %(password,logspath,flowpath,graphpath,crontime,oldesttime)




	print """Please copy and paste the following text into a file named config.xml and make sure that file is located in ~/etc or /etc  """
	print (configfile)
	return flowpath,graphpath,crontime

################### MAIN ################
print "Please insert the following information for a mysql user with the ability to create tables and users."
print "The information is necessary to access mysql and create the mysqluser 'toa' and load the database"
DB_USER=raw_input("Enter a valid  MySQL Username\n")
DB_PASS=raw_input("Enter a valid  MySQL Password\n")
#DB_NAME=raw_input("Enter the database to be used\n")
DB_HOST='localhost'
try:
	db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, host=DB_HOST)

	c = db.cursor()

except MySQLdb.Error, e:

    print "Error %d: %s" % (e.args[0],e.args[1])
    exit(1)


if (checkifuserexists(c)==0):
	print "Enter password for mysql user 'toadb'"
	toapass=getpasswd()
	sql="Create user 'toadb'@'%s' identified by '%s'"%(DB_HOST, toapass)

	try:
		c.execute(sql)

	except MySQLdb.Error, e:

    		print "Error %d: %s" % (e.args[0],e.args[1])
		print "Exiting installation with errors"
		c.close()
		exit(1)
	print "Mysql user toa created"
else:
	cont=raw_input("The user 'toadb'  already exist. Do you wish to continue?(y/n)\n")
	if cont!='y' and  cont!='Y':
	
		print "Exiting installation with errors"
		c.close()
		exit(1)
    
	print "Enter the password for mysql user 'toadb'"
	toapass=getpasswd()

print "Creating database Toa and granting permissions to user toadb"

try:
	c.execute("CREATE DATABASE IF NOT EXISTS Toa;")

except MySQLdb.Error, e:

    	print "Error %d: %s" % (e.args[0],e.args[1])
	print "Exiting installation with errors"
	c.close()
    	exit(1)

try: 
 	c.execute("GRANT ALL ON Toa.* TO 'toadb'@'%s';"%(DB_HOST))
except MySQLdb.Error, e:
    	print "Error %d: %s" % (e.args[0],e.args[1])
	c.close()
	exit(1)
	
c.close()

print "Testing connection to database using toadb..."
try:
	db = MySQLdb.connect(user='toadb', passwd=toapass, host=DB_HOST,db='Toa')

	c = db.cursor()
	print "Connected"
except MySQLdb.Error, e:

    print "Error %d: %s" % (e.args[0],e.args[1])
    if e.args[0]==1045:
	print "If the user was created before installation make sure you provided the correct password for the existing user at the begining of the installation\n"
	print "Exiting installation with errors"
    exit(1)

print "Loading Database..."
if os.path.exists('db/flowsschema.sql'):
	#os.system('mysql -u toadb -p%s -h %s Toa < db/flowsschema.sql'%(toapass,DB_HOST))
	try:
		file=open('db/flowsschema.sql','r')
		lines=(file.read()).split(";")
		for query in lines:
			c.execute(query)
	except MySQLdb.Error,e:
    		print "Error %d: %s" % (e.args[0],e.args[1])
		print "ERROR: database could not be loaded from 'db/flowsschema.sql', exiting ..."
		c.close()
		exit(1)

	print "Database loaded"
else:
	print "Error: Database dump 'flowsschema.sql' not found, please place it in this directory"
	exit(1)


print "Success"
flowpath,graphpath,crontime=createconfigfile(toapass)

print ("""Creating User 'toa' as admin for  the web interface""")
print "Insert password for admin 'toa'"
userpass=getpasswd()
phone=raw_input("Enter phone number(only digits)\n")
while re.match("[0-9]{7,20}$",phone)==None :
	print "ERROR: not a valid phone number (use only digits)"
	phone=raw_input("Enter phone number(only digits)\n")

email=raw_input("Enter email\n")
while re.match("([a-zA-Z0-9]|\.|_|-|\+|$)+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$",email)==None:
	print "Error: not a valid email adress"
	email=raw_input("Enter email\n")


user=UserModel()
if user.connect('Toa','toadb',toapass,flowpath,graphpath,crontime):
	print 'asasdsad'
	user.Create('toa',phone,userpass,email,1)
else:
	print "ERROR: Database Connection Error\n"
	print "Make sure the user 'toa' doesn't exist already"
	print "Exiting installation with errors"
	c.close()
	exit(1)

print("Done, you are now able to log in as admin using the toaoverlord user")


c.close()
