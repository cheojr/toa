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

from multiprocessing import Pool
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
c1 = db.cursor()

network = GenerateDictionary().GenDictionary(c1)
c1.close()
now = int(time.time())
now = now - now%INCREMENT  # now is the last time multiple of our incerment (normally300 w seconds which is 5 mins). 

def n2nworker(to_inter,to_inter_type,nid,nlabel):
            db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, db=DB_NAME, host=DB_HOST)
            c = db.cursor()
	    #print 'P2P PRINTING'	
	    to_label = GetLabelByNumber(c, to_inter, to_inter_type)
	    to_id=GetNetId(c, to_inter, to_inter_type)
	    nn_id=getnn_id(nid,to_id,c)

	    #print nlabel,"to: ",to_label,"to_id:", to_id,"inter:",to_inter_type
	    #graphP2P24h(now,nlabel, nn_id, to_label, GRAPH_PATH)

	    graphP2P1s(now,nlabel, nn_id, to_label, GRAPH_PATH)

	    graphP2P1m(now,nlabel, nn_id, to_label, GRAPH_PATH)

	    graphP2P1a(now,nlabel, nn_id, to_label,  GRAPH_PATH)

            c.close()
def portworker(port,nid,nlabel):
             db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, db=DB_NAME, host=DB_HOST)
             c = db.cursor()
	     #print nlabel,"port: ",port;
	
	     pid =  GetPortId(c, nid, port)

             #print "Port", nid
	     #graphPort24h(now,nlabel, port, pid, GRAPH_PATH)

	     graphPort1s(now,nlabel,port,  pid, GRAPH_PATH)

	     graphPort1m(now,nlabel,port, pid, GRAPH_PATH)
	
	     graphPort1a(now,nlabel,port, pid, GRAPH_PATH)	

             c.close()
def processgrapher(args):
                label, inter= args
                
                db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, db=DB_NAME, host=DB_HOST)
                c = db.cursor()
		# Input / Output
		#print label, network[inter][label]["i"], network[inter][label]["o"]
		nlabel = GetLabelByNumber(c, label, inter)
		nid = GetNetId(c, label, inter)
		#print nlabel

		#print 'Printing normal graph'	
                # Normal graphs for I/O:
		#graphInt24h(now, nlabel, nid, GRAPH_PATH)
		graphInt1s(now, nlabel, nid, GRAPH_PATH)
		graphInt1m(now, nlabel, nid, GRAPH_PATH)
		graphInt1a(now, nlabel, nid, GRAPH_PATH)
		# Graphs for Ports
                c.close()#Close connection
		for port in network[inter][label]["port"]:
                        portworker(port,nid,nlabel)
                        #portprocess=[Process(target=portworker,args=(port,nid,nlabel)) for port in network[inter][label]["port"]]
			#for p in portprocess:
                            #p.start()
                        #for p in portprocess:
                            #p.join()


                
				
		# Graphs Point to Point Interfaces
		for to_inter_type in network[inter][label]["to"]:
                    n2nworker(to_inter,to_inter_type,nid,nlabel)
			#print 'P2P PRINTING loop 1'	
                        #n2nprocess=[Process(target=n2nworker,args=(to_inter,to_inter_type,nid,nlabel)) for to_inter in network[inter][label]["to"][to_inter_type]]
		#	for p in n2nprocess:
                 #           p.start()
                  #      for p in n2nprocess:
                   #         p.join()


if __name__=='__main__':

    it=0
    max=5
    labels=[]
    for inter in network.keys():
        	#labels = [label for label in network[inter].keys()]
		for label in network[inter].keys():
			if it<max:
				labels.append(label)
				it=it+1
		#print labels
        	if len(labels)>0:
            		args=((label,inter) for label in labels)
            		pool = Pool(processes=8)
            		pool.map_async(processgrapher,((label,inter) for label in labels))
            		pool.close()
            		pool.join()
