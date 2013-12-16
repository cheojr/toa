#################################################################################################################################
#
# flowgrapher.py
# Generate Traffic Graphics
#
#
#
################################################################################################################################


from GenerateDictionary import *

from grapher_divided_graph import *

import sys
import MySQLdb
import os
import time

from Config import Config
config=Config()
DB_NAME=config.getDBName();
DB_HOST='localhost'
DB_USER=config.getUser();
DB_PASS=config.getPassword();

INCREMENT=config.getCronTime()
GRAPH_PATH=config.getGraphsPath()
interval_modulation=INCREMENT #sets the number that thetime is going to be modulated by, should be the same as the time increment (if 5min then 300)so that if the module is 0 then the unixtime has ben incremented correctly 
db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, db=DB_NAME, host=DB_HOST)
c = db.cursor()

network = GenerateDictionary().GenDictionary(c)
now = int(time.time())
now = now - now%INCREMENT  # now is the last time multiple of our incerment (normally300 w seconds which is 5 mins). 


for inter in network.keys():
	for label in  network[inter].keys():
		# Input / Output
		#print label, network[inter][label]["i"], network[inter][label]["o"]
		nlabel = GetLabelByNumber(c, label, inter)
		nid = GetNetId(c, label, inter)
		#print nlabel

		#print 'Printing normal graph'	
                # Normal graphs for I/O:
		graphInt24h(now, nlabel, nid, GRAPH_PATH)
		#graphInt1s(now, nlabel, nid, GRAPH_PATH)
		#graphInt1m(now, nlabel, nid, GRAPH_PATH)
		#graphInt1a(now, nlabel, nid, GRAPH_PATH)
	 
		# Graphs for Ports
		for port in network[inter][label]["port"]:
			#print nlabel,"port: ",port;
	
			pid =  GetPortId(c, nid, port)

                        #print "Port", nid
			graphPort24h(now,nlabel, port, pid, GRAPH_PATH)

			#graphPort1s(now,nlabel,port,  pid, GRAPH_PATH)

			#graphPort1m(now,nlabel,port, pid, GRAPH_PATH)
	
			#graphPort1a(now,nlabel,port, pid, GRAPH_PATH)	

             #   continue
				
		# Graphs Point to Point Interfaces 
		for to_inter_type in network[inter][label]["to"]:
			#print 'P2P PRINTING loop 1'	
			for to_inter in  network[inter][label]["to"][to_inter_type]:
			        #print 'P2P PRINTING'	
				to_label = GetLabelByNumber(c, to_inter, to_inter_type)
				to_id=GetNetId(c, to_inter, to_inter_type)
				nn_id=getnn_id(nid,to_id,c)

			#	print nlabel,"to: ",to_label,"to_id:", to_id,"inter:",to_inter_type
				graphP2P24h(now,nlabel, nn_id, to_label, GRAPH_PATH)

				#graphP2P1s(now,nlabel, nn_id, to_label, GRAPH_PATH)

				#graphP2P1m(now,nlabel, nn_id, to_label, GRAPH_PATH)

				#graphP2P1a(now,nlabel, nn_id, to_label,  GRAPH_PATH)

c.close()#Close connection
