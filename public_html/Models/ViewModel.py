##### Imports #####

import struct
import socket
import re         
import MySQLdb
import os
import sys  
from Config import Config
##### Imports #####

class ViewModel:

	def __init__(self, name = None, user = None, passwd = None, flows_path = None, graphs_path = None, crontime = None):

		if name == None:

			dbinfo = Config()

			try:

				conn = MySQLdb.connect(user=dbinfo.getUser(), passwd=dbinfo.getPassword(), db=dbinfo.getDBName(), host="localhost")

				self.cursor = conn.cursor()

			except MySQLdb.Error, e:

   				print "Error %d: %s" % (e.args[0],e.args[1])

		else:

			dbinfo = Config(name, user, passwd, flows_path, graphs_path, crontime)

			try:

				conn = MySQLdb.connect(user=dbinfo.getUser(), passwd=dbinfo.getPassword(), db=dbinfo.getDBName(), host="localhost")

				self.cursor = conn.cursor()

			except MySQLdb.Error, e:

   				print "Error %d: %s" % (e.args[0],e.args[1])


   	def __del__(self):

		self.cursor.close()

	###################### Model Methods ############################

	def Get(self, property, field, value):
	
		try:
		
			if property:

				self.cursor.execute("""select %s from VIEW where %s='%s'""" %(property, field, value))

			else:
				self.cursor.execute("""select * from VIEW where %s=%s""" %(field, value))

			return self.cursor.fetchone()[0]

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])


	def GetAll(self, uid):

		try:
		
			self.cursor.execute("""select vid, view_name from VIEW where vid in (select v_id FROM USUARIO_VIEW where u_id = '%s')"""%uid)

			return self.cursor.fetchall()

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])

			

	def Add(self, name, description):

                try:
                        
                        self.cursor.execute("""insert into VIEW (view_name, description) values('%s', '%s')"""%(name, description))

                        return self.cursor.fetchall()

                except MySQLdb.Error, e:

                        return "Error %d: %s"%(e.args[0], e.args[1])



        def Edit(self, property, pvalue,field, value):

                try:

                        self.cursor.execute("""update VIEW set %s=%s where %s='%s'""" %(property, pvalue, field, value))

                        return self.cursor.fetchone()[0]

                except MySQLdb.Error, e:

                        return "Error %d: %s"%(e.args[0], e.args[1])

        def Remove(self, field, value):

                try:

                	self.cursor.execute("""delete from VIEW where %s='%s'""" %(field, value))

                        return "Graph Removed"

                except MySQLdb.Error, e:

                        return "Error %d: %s"%(e.args[0], e.args[1])
