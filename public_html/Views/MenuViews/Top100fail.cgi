#!/usr/bin/python

import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('../../../bin/')
from Config import Config
config=Config()
DB_NAME=config.getDBName();
DB_HOST='localhost'
DB_USER=config.getUser();
DB_PASS=config.getPassword();


db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, db=DB_NAME, host=DB_HOST)
c = db.cursor()
cgitb.enable()

sys.path.append('../../Models/')
from PortModel import PortModel
from Net2NetModel import Net2NetModel
from NetworkModel import NetworkModel
portmodel=PortModel()
net2netmodel=Net2NetModel()
networkmodel=NetworkModel()

print "Content-Type: text/html\n\n"

print 

form = cgi.FieldStorage()


def format(results,entity):

        max=results[0][0]

	if max>= 1073741824:
                sizetype="GB"
                typediv=1073741824.0
        elif max >= 1048576:
                sizetype="MB"
                typediv=1048576.0
        elif  max >= 1024:
                sizetype="KB"
                typediv=1024.0
        else:
               sizetype="bytes"
               typediv=1
	
	formatted=""	
	for i in range(len(results)):
                if entity=='net': 
			label = networkmodel.GetLabel(results[i][1])
		elif entity=='ports':
			id=portmodel.GetPortNetwork(results[i][1])[0]
    			labelandport=portmodel.GetGraphInfo( id, results[i][1])
			label="%s-%s"%(labelandport[0],labelandport[1])


		else:
			fromandto=net2netmodel.GetFromandTo(results[i][1])
			From=networkmodel.GetLabel(fromandto[0][0])
			to=networkmodel.GetLabel(fromandto[0][1])
			label="%s to %s"%(From,to)
			
		time=datetime.fromtimestamp(results[i][2]).strftime('%Y-%m-%d %H:%M:%S')
		formatted += "%s,%.2f,%s,%s#100"%(label,results[i][0]/typediv,sizetype,time)


	return formatted#.replace("#!size!#", "%s"%("bytes"));


if form.has_key('entity') and form.has_key('type'):
	
	type=form.getvalue('type')

	entity=form.getvalue('entity')
	
	if entity=='net':
		
		if type=='oct':
			
			sql="select (ooctect+ioctect),n_id, time_unix  from rrd_n  natural join NETWORK order  by (ooctect+ioctect) desc limit 100;"
			c.execute(sql)
			results=format(c.fetchall(),entity)

		elif type=='pak':
			
			sql="select (ipacks+opacks),n_id, time_unix  from rrd_n  natural join NETWORK order  by (opacks+ipacks) desc limit 100;"
			c.execute(sql)
			results=format(c.fetchall(),entity)
		
		elif type=='flows':
			
			sql="select (iflows+oflows),n_id, time_unix  from rrd_n  natural join NETWORK order  by (oflows+iflows) desc limit 100;"
			c.execute(sql)
			results=format(c.fetchall(),entity)
	
		else:
	
			results="ERROR: entity value is not valid\n"

	elif entity=='ports':
		
		if type=='oct':
			
			sql="select (ooctect+ioctect),p_id, time_unix  from rrd_port natural join  PORT  order  by (ooctect+ioctect) desc limit 100;"
			c.execute(sql)
			results=format(c.fetchall(),entity)

		elif type=='pak':
			
			sql="select (opacks+ipacks), p_id, time_unix  from rrd_port natural join PORT  order  by (opacks+ipacks) desc limit 100;"
			c.execute(sql)
			results=format(c.fetchall(),entity)
		
		elif type=='flow':
			
			sql="select (oflows+iflows), p_id, time_unix  from rrd_port natural join PORT order  by (oflows+iflows) desc limit 100;"
			c.execute(sql)
			results=format(c.fetchall(),entity)
	
		else:
	
			results="ERROR: entity value is not valid\n"
	
	elif entity=='p2p':
	
		if type=='oct':
			sql=" select (ooctect+ioctect),rrd_to_net.nn_id,time_unix from rrd_to_net natural join NET2NET order by (ooctect+ioctect) desc limit 100;"	
			c.execute(sql)
			results=format(c.fetchall(),entity)

		elif type=='pak':
			
			sql=" select (opacks+ipacks), rrd_to_net.nn_id, time_unix  from rrd_to_net natural join NET2NET order by (opacks+ipacks) desc limit 100;"	
			c.execute(sql)
			results=format(c.fetchall(),entity)
		
		elif type=='flow':
			
			
			sql=" select (oflows+iflows), rrd_to_net.nn_id, time_unix  from rrd_to_net natural join NET2NET order by (oflows+iflows) desc limit 100;"	
			c.execute(sql)
			results=format(c.fetchall(),entity)
	
		else:
	
			results="ERROR: entity value is not valid\n"
	else:

		results="ERROR: entity value not valid\n"


else:
	results="ERROR: missing params\n"

print results;
