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

class GraphModel:

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

	def Get(self, property, field, value):
	
		try:
		
			if property:

				self.cursor.execute("""select %s from GRAPH where %s='%s'""" %(property, field, value))

			else:
				self.cursor.execute("""select * from GRAPH where %s=%s""" %(field, value))

			return self.cursor.fetchall()

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])


	def GetViewGraph(self, property, field, value):
	
		try:
		
			if property:

				self.cursor.execute("""select %s from VIEW_GRAPH where %s='%s'""" %(property, field, value))

			else:
				self.cursor.execute("""select * from VIEW_GRAPH where %s='%s'""" %(field, value))

			return self.cursor.fetchall()

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])


	def GetAll(self):

		try:
		
			self.cursor.execute("""select gid, graph_name FROM GRAPH""")

			return self.cursor.fetchall()#fetch all the labels(all the networks)

		except MySQLdb.Error, e:

			return "Error %d: %s"%(e.args[0], e.args[1])

			

	def Add(self, name, path, vid):

				try:
                     
					self.cursor.execute("select gid from GRAPH where graph_path = '%s'"%(path))

					gid = self.cursor.fetchone()

					#print "Hello", gid

					if gid == None:

						status = self.cursor.execute("""insert into GRAPH (graph_name, graph_path) values('%s', '%s')"""%(name, path))

						gid = self.cursor.lastrowid

					status = self.cursor.execute("""insert into VIEW_GRAPH (v_id, g_id) values('%s', '%s')"""%(vid, gid[0]))

					return status

				except MySQLdb.Error, e:

					return "Error %d: %s"%(e.args[0], e.args[1])



        def Edit(self, property, pvalue,field, value):

                try:

                        self.cursor.execute("""update GRAPH set %s=%s where %s='%s'""" %(property, pvalue, field, value))

                        return self.cursor.fetchone()[0]

                except MySQLdb.Error, e:

                        return "Error %d: %s"%(e.args[0], e.args[1])

        def Remove(self, field, value):

                try:

                	self.cursor.execute("""delete from GRAPH where %s=%s""" %(field, value))

                        return "Graph Removed"

                except MySQLdb.Error, e:

                        return "Error %d: %s"%(e.args[0], e.args[1])