#!/usr/bin/python
import re
import cgi
import sys 
import os
import cgitb
import MySQLdb
import time
from datetime import datetime
sys.path.append('../../../bin/')
from Config import Config
config=Config()
DB_NAME=config.getDBName();
DB_HOST='localhost'
DB_USER=config.getUser();
DB_PASS=config.getPassword();
INCREMENT=config.getCronTime()
db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, db=DB_NAME, host=DB_HOST)
c = db.cursor()


cgitb.enable()

sys.path.append('../../Models/')
from PortModel import PortModel

print "Content-Type: text/html\n\n"

print 

form = cgi.FieldStorage()

def getinfo(id,entity):
	if entity=='net':
		info=GetNetwork(c,id)	
	elif entity=='ports':
		portmodel=PortModel()		
		id=portmodel.GetPortNetwork(id)[0]
		if id!=None:
			info=GetNetwork(c,id)
		else:
			info=None
	else:
		info=None
	return info	
def GetNetwork(c, id):
	c.execute("""select label, interface, asn, tom from NETWORK where n_id=%s""" % id)
	result = c.fetchone()	
	if result:
		return result[0], result[1], result[2], result[3]

	return None, None, None, None

def getfilepath():

	PATH=config.getFlowsPath()

	now=datetime.now()
	unixtime=time.mktime(now.timetuple())
	unixtime=(unixtime-(unixtime%INCREMENT))-INCREMENT
	filetime=time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(unixtime))

	filetime=filetime.split(' ')
	year_month_day=filetime[0]
	hour=filetime[1]
	hour=("".join(hour.split(':')))

	year=year_month_day[0:4]
	year_month=year_month_day[0:7]
	PATH=PATH+'/'+year+'/'+year_month+'/'+year_month_day+'/ft-v05.'+year_month_day+'.'+hour+'-0400'
	return PATH

def format(results,type):
	
        max=[1,1,1]
	typediv=[1,1,1]
	sizetype=['bytes','bytes','bytes']

	for i in range(len(results)):
		if i%4!=0:#no comparing the ports or ips
			if max[(i%4)-1]< int(results[i]):
				max[(i%4)-1]=int(results[i])

	for i in range(len(max)):
		if max[i]>= 1073741824:
			#print sizetype	
                	sizetype[i]="GB"
                	typediv[i]=1073741824.0
        	elif max[i] >= 1048576:
                	sizetype[i]="MB"
                	typediv[i]=1048576.0
        	elif  max[i] >= 1024:
                	sizetype[i]="KB"
                	typediv[i]=1024.0
        	else:
               		sizetype[i]="bytes"
               		typediv[i]=1

	format=""	
	for i in range(len(results)):
		if i%4!=0:
			format+="%.2f-%s "%(int(results[i])/typediv[(i%4)-1],sizetype[(i%4)-1])
		else:
			format+="#top100 %s "%(results[i])
	return format
		
if form.has_key('entity') and form.has_key('id') and form.has_key('type'):
	#int= as | int 
	# type = flows|oct|pak
	# entity = net | ports
	types={'flows':1,'oct':2,'pak':3}
	entities={'net':9,'ports':5}
	type=form.getvalue('type')

	id =form.getvalue('id')
	entity=form.getvalue('entity')
   
	if re.match('(net|port)$',entity) != None and re.match('(flows|pak|oct)$',type)!=None and re.match('(\d)*$',id)!=None :

		info=getinfo(id,entity)
		if info:	
			tom=info[3]	

			if tom=='as':
				asn=info[2]

				cmd="/usr/local/flow-tools/bin/flow-cat %s | /usr/local/flow-tools/bin/flow-filter -a %s | /usr/local/flow-tools/bin/flow-stat -f %s -S %s | head -n 112"%(getfilepath(),asn,entities[entity],types[type])
				pipe=os.popen(cmd)
				top=pipe.read().split('#\n')
				top=str(top[len(top)-1])
				top=top.split()
				top=format(top,types[type])
			elif tom=='int':
	
				int=info[1]	
				cmd="/usr/local/flow-tools/bin/flow-cat %s | /usr/local/flow-tools/bin/flow-filter -i %s | /usr/local/flow-tools/bin/flow-stat -f %s -S %s | head -n 112"%(getfilepath,asn,entities[entity],types[type])
				pipe=os.popen(cmd)
				top=list(pipe.read().split('#\n'))
				top=str(top[len(top)-1])
				top=top.split()
				top=format(top,types[type])
			
	
			else:
					top="ERROR: Sorry, no Top100 option for that id \n" 
		else:
			top="ERROR: Not valid network\n"
	else:
		top="ERROR: Not valid params\n"
else:
	top="ERROR: missing params\n"

print top;
