##### Imports #####

import struct
import socket
import re         
import MySQLdb
import os
import sys  
sys.path.append("../../bin")
from Config import Config
##### Imports #####

class ViewModel:

	def __init__(self, name = None, user = None, passwd = None, flows_path = None, graphs_path = None, crontime = None):

		if name == None:

			try:

				dbinfo = Config()

			except:

				pass

			try:

				conn = MySQLdb.connect(user=dbinfo.getUser(), passwd=dbinfo.getPassword(), db=dbinfo.getDBName(), host="localhost")

				self.cursor = conn.cursor()

			except MySQLdb.Error, e:

				pass

   				#print "Error %d: %s" % (e.args[0],e.args[1])

		else:

			dbinfo = Config(name, user, passwd, flows_path, graphs_path, crontime)

			try:

				conn = MySQLdb.connect(user=dbinfo.getUser(), passwd=dbinfo.getPassword(), db=dbinfo.getDBName(), host="localhost")

				self.cursor = conn.cursor()

			except MySQLdb.Error, e:

				pass

   				#print "Error %d: %s" % (e.args[0],e.args[1])


   	def __del__(self):

		self.cursor.close()

	###################### Model Methods ############################

	def GetViewGraphs(self, vid):

		try:

			self.cursor.execute("""select g_id from VIEW_GRAPH where v_id='%s'""" %(vid))

			return self.cursor.fetchall()

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])

	def Get(self, property, field, value):
	
		try:
		
			if property:

				self.cursor.execute("""select %s from VIEW where %s='%s'""" %(property, field, value))

			else:
				self.cursor.execute("""select * from VIEW where %s=%s""" %(field, value))

			return self.cursor.fetchall()

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])


	def GetAll(self, uid):

		try:
		
			self.cursor.execute("""select vid, view_name from VIEW where vid in (select v_id FROM USUARIO_VIEW where u_id = '%s')"""%uid)

			return self.cursor.fetchall()

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])

			

	def Add(self, name, uid):

                try:
                        
                        status = self.cursor.execute("""insert into VIEW (view_name) values('%s')"""%(name))

                        vid = self.cursor.lastrowid

                        status = self.cursor.execute("""insert into USUARIO_VIEW (v_id, u_id) values('%s', '%s')"""%(vid, uid))

                        return status

                except MySQLdb.Error, e:

                        return "Error %d: %s"%(e.args[0], e.args[1])



        def Edit(self, property, pvalue,field, value):

                try:

                        self.cursor.execute("""update VIEW set %s=%s where %s='%s'""" %(property, pvalue, field, value))

                        return self.cursor.fetchone()[0]

                except MySQLdb.Error, e:

                        return "Error %d: %s"%(e.args[0], e.args[1])

		def Remove(self, vid):

			try:

 				self.cursor.execute("""delete from VIEW_GRAPH where v_id = '%s'"""%vid)

 				self.cursor.execute("""delete from USUARIO_VIEW where v_id = '%s'"""%vid)

 				self.cursor.execute("""delete from VIEW where vid='%s'""" %(vid))

 				return "Graph Removed"

			except MySQLdb.Error, e:

				return "Error %d: %s"%(e.args[0], e.args[1])
