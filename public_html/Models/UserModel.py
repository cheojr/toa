##### Imports #####

import struct
import socket
import re         
import MySQLdb  
import sys
sys.path.append("../../bin/")
from Config import Config

##### Imports #####

class UserModel:

	def connect(self, name = None, user = None, passwd = None, flows_path = None, graphs_path = None, crontime = None):

		try:	
		
			dbinfo = Config()
		
			try:

				conn = MySQLdb.connect(user=dbinfo.getUser(), passwd=dbinfo.getPassword(), db=dbinfo.getDBName(), host="localhost")

				self.cursor = conn.cursor()

				return True

			except MySQLdb.Error, e:
				
				pass
                                
				sys.exit(0)
   				
				print "Error %d: %s" % (e.args[0],e.args[1])

				return False


		except:

			dbinfo = Config(name, user, passwd, flows_path, graphs_path, crontime)

			try:

				conn = MySQLdb.connect(user=dbinfo.getUser(), passwd=dbinfo.getPassword(), db=dbinfo.getDBName(), host="localhost")

				self.cursor = conn.cursor()

				return True

			except MySQLdb.Error, e:
				
				pass
   				
   				print "Error %d: %s" % (e.args[0],e.args[1])

   				return False


   	def __del__(self):
		
		try:
		
			self.cursor.close()
		
		except:
			pass

	###################### UserModel Methods ############################

	def GetList(self):

		self.cursor.execute("""SELECT email FROM USUARIO""")#select all the usernames in the database

		return self.cursor.fetchall()#fetch them all and store them on us(user) as a list


	def GetComplementList(self, id):

	    self.cursor.execute("""SELECT name FROM USUARIO WHERE uid != '%s'"""%id)

	    return self.cursor.fetchall()


	def Get(self, email, passwd):

		self.cursor.execute("""select name from USUARIO where Email = '%s' and passwd = AES_ENCRYPT('%s', 'toaaotnmscslabbalsc')"""%(email, passwd))

		a = self.cursor.fetchone()

		if a:

			return 1

		else:

			return 0


	def GetMail(self, uid):
	
		self.cursor.execute("""select email from USUARIO where uid = '%s'"""%(uid))

		return self.cursor.fetchone()


	def GetMailList(self):

	    self.cursor.execute("SELECT email FROM USUARIO")

	    return self.cursor.fetchall()


	def GetPassword(self, user):	

		self.cursor.execute("""SELECT passwd FROM USUARIO WHERE email = '%s'"""%user)#select all the passwords that correspond to the current username

		return self.cursor.fetchone()#fetch it and store it on the variable pas


	def GetPasswordById(self, id): 

		self.cursor.execute("""SELECT passwd FROM USUARIO WHERE uid = '%s'"""%id)#select all the passwords that correspond to the current username

		return self.cursor.fetchone()#fetch it and store it on the variable pas


	def GetId(self, user):

		self.cursor.execute("SELECT uid FROM USUARIO WHERE email = '%s'"""%user)#select the id of the user from the database

		return self.cursor.fetchone()#fetch the id and store it on the variable id

	def GetUsername(self, id):

		self.cursor.execute("SELECT email FROM USUARIO WHERE uid='%s'"%id)

		return self.cursor.fetchone()


	def GetPrivilege(self, id):

		self.cursor.execute("""SELECT staff FROM USUARIO WHERE uid='%s'"""%id)

		return self.cursor.fetchone()


	def ChangePassword(self, np, id):

		self.cursor.execute("""UPDATE USUARIO SET passwd='%s' WHERE uid='%s'"""%(np,id))


	def Create(self, name, phone, pasw, email, staff):

		try:

			self.cursor.execute("""INSERT INTO USUARIO (name, phone, passwd, email, staff) VALUES ('%s', '%s', AES_ENCRYPT(%s, "toaaotnmscslabbalsc"), '%s','%s')"""%(name, phone,pasw,email,staff))

			return True

		except MySQLdb.error:

			return False

	def Delete(self, id):

		self.cursor.execute("""DELETE FROM USUARIO WHERE uid = '%s'"""%id)
