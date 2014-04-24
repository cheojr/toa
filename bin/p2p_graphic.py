#!/usr/bin/python

import time 
import MySQLdb
import cgi
import random
from FlowQueries import *

from Config import Config


config=Config()

DB_NAME=config.getDBName();
DB_HOST='localhost'
DB_USER=config.getUser();
DB_PASS=config.getPassword();




db=MySQLdb.connect(DB_HOST,DB_USER,DB_PASS,DB_NAME)
c=db.cursor() #Global mysql object to make queries inside  the functions
PATH=config.getGraphsPath()
class runpage:
        #This is a class called runpage that runs the page and it contains all the functions necesarry to display the p2p graph, it should only be instanced at the end of this file and the contructor
        # takes care of calling the necessary functions 

        


		

	def __init__(self):
        # constructor 
		

		hash={}
		hash=self.createhash()	
                file=open(PATH+'/p2p_graph.js','w')
		self.leerhash(hash,file)
    




	def createhash (self):
		
		idlist=GetNetworks(c) # Function from Flowqueries.py that gets the id list of networks 
	        #print idlist	
		hash={}
		for i in range(len(idlist)):
			
			hash[idlist[i][0]]={}
			idto=GetNetwork2(c,idlist[i][0])
                 #       print idlist[i][0],'to'
			# idto[m][0]= nn_id, idto[m][1]=label, idto[m][2]tn_id
			for m in range(len(idto)):
				#print idto[m][2], self.getdata(idto[m][0],c)
				hash[idlist[i][0]][idto[m][2]]=self.getdata(idto[m][0],c)
                                #hash[idlist[i][0]][idto[m][2]][0] is output and [1] is input
				#file.write " La coneccion de %s a %s tiene  %s packetes"%(idlist[i][0],idto[m][2],hash[idlist[i][0]][idto[m][2]])
                #print hash
		return hash
	def leerhash(self,hash,file):
	
		colors=[3452,1245,'#dd3333',2456,6543]
		
		file.write("""
			

  			var labelType, useGradients, nativeTextSupport, animate;

			(function() {
  			var ua = navigator.userAgent,
      			iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      			typeOfCanvas = typeof HTMLCanvasElement,
      			nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      			textSupport = nativeCanvasSupport
        		&& (typeof document.createElement('canvas').getContext('2d').fillText =='function');
  			//I'm setting this based on the fact that ExCanvas provides text support for IE
  			//and that as of today iPhone/iPad current text support is lame
  			labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  			nativeTextSupport = labelType == 'Native';
  			useGradients = nativeCanvasSupport;
  			animate = !(iStuff || !nativeCanvasSupport);})();

			var Log = {
  			elem: false,
  			write: function(text){
    			if (!this.elem)
      			this.elem = document.getElementById('log');
    			this.elem.innerHTML = text;
    			this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  						}


				};


			function init(){
			

  			//init data
  			var json = [
      			//"root" node is invisible
				{
				"id" : "root" ,
				"name" :"" ,
				"data" :{
				"$type": "none" 
				},"adjacencies": [
				""")
	### Writing the adjacencies for the root is essensial, it needs to be connected to everybody
		From=hash.keys()
		for i in range(len(From)):
			if From[0]==From[i]:

				file.write("""{""")
			else:
				file.write(""",{""")
			file.write(("""
					"nodeTo": "%s",
					"data": {
					'$type': 'none'
						}
		  			}""")%(From[i]))

		file.write("""]
			},""")
	#################################Finishes writing the root and its adjacencies
	
                for i in range (len(From)):
                    if From[0]==From[i]:#simple fix to the issue of everything but the last element having a coma at the end
                        file.write("""  { """)
                    else:
                        file.write(""" ,{ """)

                    file.write( """ "adjacencies": [ """) #Starts the array that contains the adjacencies of the network in From[i]
                    max_flow,min_flow=self.get_threshold(From[i],c)
                    to=hash[From[i]].keys() #These adjacencies are accesed using the id  From[i] as a key in the hash and are saved in the array " to"
                    all_octects=0
                    all_packets=0
                    all_flows=0
                    for x in range(len(to)) : #This for file.writes out all the adjacent networks to the network specified in the id in From[i]
                            octects=hash[From[i]][to[x]][0][0]+hash[From[i]][to[x]][0][1]#[0] to choose eliminate the tupple and [0|1] = octects (0=outputfor and 1=input)  [2|3] for packets and [4|5] for flows
                            packets=hash[From[i]][to[x]][0][2]+hash[From[i]][to[x]][0][3]#[0] to choose eliminate the tupple and [0|1] = octects (0=outputfor and 1=input)  [2|3] for packets and [4|5] for flows
                                  
                            flows=hash[From[i]][to[x]][0][4]+hash[From[i]][to[x]][0][5]#[0] to choose eliminate the tupple and [0|1] = octects (0=outputfor and 1=input)  [2|3] for packets and [4|5] for flow
                                                                                                                                                                                                                                           
                            all_octects+=octects
                            
                            all_packets+=packets
                           
                            all_flows+=flows
                                                                                                                                                                                                                                           
                            
                            if to[x]== to[0]:
                                                      
                                file.write ("""{ """)
                                                                                                                                                                                                                                           
                            else:
                                                                                                                                                                                                                                            

                                file.write (""" ,{ """)

                            
                            file.write (("""
                                    "nodeTo": "%s",

                                    "data": {
                                                                                                                                                                                                                                                   "$color": "%s",
                                          
                                    "$lineWidth":4,
                                                                                                                                                                                                                                                   "$Octects": %s,
                                                                                                                                                                                                                                                   "$Packets": %s,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "$Flows": %s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }
                                                   
                                    """) %(to[x],self.getcolor(packets,max_flow,min_flow),octects,packets,flows))  #file.writes out an adjacent network to From[i]
                    
                
		      
                    file.write ((""" ],
                            "data": {
                            "$angularWidth":10,
                            "$height" : 50,
                            "$color": "#A94442",
                            //"$color": "#E25D33",
                                                                                                                                                                                                                                           "$All_Octects": %s,
                                                                                                                                                                                                                                           "$All_Packets": %s,
                                                                                                                                                                                                                                           "$All_Flows": %s
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                           "id": "%s",
                                                                                                                                                                                                                                                                                                                                                                                                                                                          "name": "%s"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }

                            """) %(all_octects,all_packets,all_flows,From[i],GetLabel(c,From[i]))) #Closes the adjacencies arra and specifies the color,shape and dim that the source network is going to have in the viz



		file.write("""];""")
		file.write("""//end
  //init Sunburst
  
  var sb = new $jit.Sunburst({
    //id container for the visualization
    injectInto: 'infovis',
    //Change node and edge styles such as
    //color, width, lineWidth and edge types
    Node: {
      overridable: true,
      type: useGradients? 'gradient-multipie' : 'multipie'
    },
    Edge: {
      overridable: true,
      type: 'hyperline',
      lineWidth: 2,
      color: '#0000FF'
    },
    //Draw canvas text. Can also be
    //'HTML' or 'SVG' to draw DOM labels
    Label: {
      type: nativeTextSupport? 'Native' : 'SVG'
    },
    //Add animations when hovering and clicking nodes
    NodeStyles: {
      enable: true,
      type: 'Native',
      stylesClick: {
       // 'color': '#96807F'
       "color": "#E25D33",
        //'color': '#DD3333'
      },
      stylesHover: {
        //'color': '#96807F'
       "color": "#E25D33",
       // 'color': '#DD3333'
      }, 
      //duration: 700
    },
      //Add Tips
          Tips: {
                enable: true,
                      onShow: function(tip, node) {
                              //count connections
                                      var count = 0;
                                              node.eachAdjacency(function() { count++; });//loop to find the ammount of connections
                                                      //display node info in tooltip
                                                              //This displays the sum of all the input and output data frmo the edges of the node that is being moused over 
                                                                      tip.innerHTML = "<div class='tip-title'> All Octects: " + node.getData('All_Octects') +'<br/> All Packets: ' + node.getData('All_Packets')+'<br/> Al Flows: ' +node.getData('All_Flows')+ "</div>"
                                                                                + "<div class='tip-text'><b>connections:</b> " + (count -1)  + "</div>"; //count -1 to eliminate root connection 
                                                                                      }
                                                                                          },

    Events: {
      enable: true,
      type: 'Native',
      //List node connections onClick

      
      onClick: function(node) {
              if(!node) return;
                      // Build the right column relations list.
                              // This is done by traversing the clicked node connections.
                                      var html = "<h4>" + node.name + "</h4><b> connections:</b><ul><li>",
                                                  list = [];
                                                it=0;//iterator
                                                          node.eachAdjacency(function(adj){//Iterates over every edge and places the name of the destination and the data values on a list
                                                                 if (it!=0){//to void displaying the root
                                                                list.push(adj.nodeTo.name);
                                                                           list.push('Octects: '+adj.getData('Octects'));//These values are defined in the data part of the edge
                                                                                    list.push('Packets: '+adj.getData('Packets'));
                                                                                             list.push('Flows: '+adj.getData('Flows')+'<br/><br/>');
                                                                                             }
                                                                it++;
                                                                                                     

                                                                                                             });

                $jit.id('inner-details').innerHTML = html + list.join('</li><li>') + '</li></ul>';//Formats the array into a list in html to be displayed

                  }
	

    },
    levelDistance: 190,
    // Only used when Label type is 'HTML' or 'SVG'
    // Add text to the labels. 
    // This method is only triggered on label creation
    onCreateLabel: function(domElement, node){
 
     var labels = sb.config.Label.type;
      if (labels === 'HTML') {
        domElement.innerHTML = node.name;
      } else if (labels === 'SVG') {
        domElement.firstChild.appendChild(document.createTextNode(node.name));
      }
    },
    // Only used when Label type is 'HTML' or 'SVG'
    // Change node styles when labels are placed
    // or moved.
    onPlaceLabel: function(domElement, node){
      var labels = sb.config.Label.type;
      if (labels === 'SVG') {
        var fch = domElement.firstChild;
        var style = fch.style;
        style.display = '';
        style.cursor = 'pointer';
        style.fontSize = "0.8em";
        fch.setAttribute('fill', "#fff");
      } else if (labels === 'HTML') {
        var style = domElement.style;
        style.display = '';
        style.cursor = 'pointer';
        if (node._depth <= 1) {
          style.fontSize = "0.8em";
          style.color = "eddd";
        } 
        var left = parseInt(style.left);
        var w = domElement.offsetWidth;
        style.left = (left - w / 2) + 'px';
      }
    }
  });
  // load JSON data.
  sb.loadJSON(json);
  // compute positions and plot.       
  sb.refresh();
  //end
}



""")
        def get_threshold(self,id,c):
            #this function gets the max and flow data from a network toe stablisha  threhold to be used in deciding if there is too much traffic or too little
            #It returns the max and min
            sql="Select max_byte_flow, min_byte_flow from NETWORK where n_id=%s"%(id)
            c.execute(sql)
            threshold=c.fetchone()#fetchs only one row
            max_flow=threshold[0]
            min_flow=threshold[1]
            return max_flow,min_flow

        def sum_alldata(self,From,to):
            #this function receives the hash and creates arrays to store all the data for the connections to that node, this is done to make the code more readable instead of accessing it by the hash
            #It also returns the sum of them to be displayed in the node tip
                
                
		
                all_octects=0
                all_packets=0
                all_flows=0

                octects=[]
                packets=[]
                flows=[]
                for x in range(len(to)):

                    
		    octects.append(hash[From][to[x]][0][0]+ hash[From][to[x]][0][1])#[0] to choose eliminate the tupple and [0|1] = octects (0=outputfor and 1=input)  [2|3] for packets and [4|5] for flows
                    packets.append(hash[From][to[x]][0][2]+ hash[From][to[x]][0][3])#[0] to choose eliminate the tupple and [0|1] = octects (0=outputfor and 1=input)  [2|3] for packets and [4|5] for flows
                    flows.append(hash[From][to[x]][0][4]+ hash[From][to[x]][0][5])#[0] to choose eliminate the tupple and [0|1] = octects (0=outputfor and 1=input)  [2|3] for packets and [4|5] for flows

                    all_octects+=octects[x]
                    all_packets+=packets[x]
                    all_flows+=flows[x]

                return octects,packets,flows,all_octects,all_packets,all_flows
	def getdata(self,id,c):	 

    #This function receives a network id, the mysql cursor and a type of data (octects,flows,packets) 
    #Its purpose is to check in the database for the most recent amount of input and output data
    # It returns 1  tupple with the input and output of Octects, Packets and flows  (it is not summed here because it may be used in future applications sepparetly so its better to save them appart and sum them later ) 


               sql="select ooctect,ioctect,opacks,ipacks,oflows,iflows from rrd_to_net where nn_id=%s order by time_unix desc limit 1" %(id)
               c.execute(sql)
               data=c.fetchall()
               return data

	def getcolor(self,data,max,min):
		blue="#00FFFF"
		red="#DF0101"
		black="#000000"
		if (data )< min:
			return black
		elif (data) >max:
			return red
		else: 
			return blue





mainpage=runpage()
c.close()
