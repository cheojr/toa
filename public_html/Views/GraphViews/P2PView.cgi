#!/usr/bin/python
import re
import cgi
import sys 
import os
import MySQLdb
import cgitb
import datetime
sys.path.append('../../../bin/')
from Config import Config
config=Config()
GRAPH_PATH=config.getGraphsPath()



def  printgraphs():


   	graph=GRAPH_PATH+'/p2p_graph.js'
   	file=open(graph,'r')
   	graphdata=file.read()
   	response="""
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



	"""


	response+= graphdata

	response+="""

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




	"""

   	response+="\n\n"
   	file.close()	
   	return response

# MAIN
cgitb.enable()
form = cgi.FieldStorage()

print "Content-Type: text/html\n\n"
print

print printgraphs()



