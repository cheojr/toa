#!/usr/bin/python
import os
import sys
import xml.etree.ElementTree as ET

#This class is for accesing the value sin the configuration file in the code.
# Warning The class asumes that the order of the tags has not been altered from the original file created at instalation


class Config:
# The constructor initializes all the values by parsing the config.xml file

        name=""
        user=""
        passwd=""
        crontime=""
        logspath=""
        flowspath=""
        graphspath=""

        def __init__(self, name = None, user = None, passwd = None, flows_path = None, graphs_path = None, crontime = None):
		if name==None:
       	    		conf_path = ""
	    		if os.path.isfile("/etc/config.xml"):
				conf_path = "/etc/config.xml"
	    		elif os.path.isfile("../etc/config.xml"):
				conf_path = "../etc/config.xml"
            		elif os.path.isfile("../../etc/config.xml"):
                		conf_path = "../../etc/config.xml"
	    		elif os.path.isfile("../../../etc/config.xml"):
                		conf_path = "../../../etc/config.xml"
	    		elif os.environ.has_key("HOME") and os.path.isfile("%s/etc/config.xml" % os.environ["HOME"]):
				conf_path = "%s/etc/config.xml" % os.environ["HOME"]
	    		elif os.environ.has_key("HOME") and os.path.isfile("%s/toa/etc/config.xml" % os.environ["HOME"]):
				conf_path = "%s/toa/etc/config.xml" % os.environ["HOME"]
            		else:
				print "ERROR: Unable to find config.xml file"
		
				sys.exit(1)
			print conf_path
	    		tree = ET.parse(conf_path)
           	 	config=tree.getroot()# gets the first tag
            		data=config[0] # the first child of the root tag

            		#values related to the database
            		self.name=data[0].text #name for the db
            		auth=data[1]#list of childrencontaining user and pass
            		self.user=auth[0].text #username
            		self.passwd=auth[1].text #password
            		#### end of values related to the database


            		logs=config[1] #tag containing the logpath as a child
            		self.logspath=logs[0].text #log path
            
            		flows=config[2] # tag containing the path of flow files as child
            		self.flowspath=flows[0].text
            
            		graphs=config[3]#tag containing the graph paths as childs
            		self.graphspath=graphs[0].text 
            
            		cron=config[4]#graph containing the crontime as childs
            		self.crontime=cron[0].text #the first (and for now only) child is the time

			#            print crontime,name,user,passwd,logspath,flowspath,graphspath

			#the following function return the values when used inside the code

		else:

                        self.dbname = name

                        self.user = user

                        self.passwd = passwd

                        self.flows = flows_path

                        self.graphs = graphs_path

                        self.crontime = crontime

			
        def getUser(self):

            return str(self.user).strip();

        def getPassword(self):

            return str(self.passwd).strip()

        def getDBName(self):

            return str(self.name).strip()

        def getFlowsPath(self):
                
            return str(self.flowspath).strip()

        def getGraphsPath(self):

            return str(self.graphspath).strip()

        def getCronTime(self):

            return int(str((self.crontime)).strip())
        
        def getLogsPath(self):

            return str(self.logspath).strip();

                    



