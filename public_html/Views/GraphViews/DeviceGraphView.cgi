#!/usr/bin/python

import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('/var/www/html/development/TOANMS/bootstrap_html/Models')
from NetworkModel import NetworkModel
from ViewModel import ViewModel

def printgraphs(GRAPH_PATH,device,type):

   file=open(GRAPH_PATH+"%s_%s.js"%(device,type),'r')
   greaphdata=file.read()
   reponse=""
   if type[len(type)-3:len(type)] !='cpl':
	#Read the data for the graphs and the js functions to draw it from js file
	response+= """<div class='graphs'>
      <div id="%s" style="width: 900px; height: 600px;"></div>
        <script type="text/javascript">
        google.load('visualization', '1', {packages: ['corechart']});
        </script> <script type="text/javascript">"""%(type)
	response+= graphdata


	response+="""
	var net = new google.visualization.AreaChart(document.getElementById('%s'));
            net.draw(data, {curveType: "function",
	 width:450, height: 400, title: graphtitle , titleX: xtitle, titleY: ytitle,
                        vAxis: {maxValue: maxvalue}}
                );
      </script>
		</div>"""(type)
   else:
	response+= """<div class='graphs'>	
	<div id="%s" style="width: 900px; height: 400px;"></div>
	<script type="text/javascript">
      google.load('visualization', '1', {packages: ['corechart']});

    	</script> <script type="text/javascript">"""%(type)
	response+=graphdata

	response+= """
	    net = new google.visualization.AreaChart(document.getElementById('%s'))
            net.draw(data, {curveType: "function",
                        width:650, height: 400,title: graphtitle, titleX: xtitle, titleY: ytitle,
                        vAxis: {maxValue: 10}}
                );

    </script></div>"""%(type)
   file.close()	

cgitb.enable()

GRAPH_PATH = "/graphtest/"### Ojo

form = cgi.FieldStorage()

id = form.getvalue("id")

type = form.getvalue("type")

NetworkModel = NetworkModel()

device = NetworkModel.GetLabel(id)

response = "<br>"

response += "<div class='navbar' id='TimeLapseMenu'>"

response += "<div class='navbar-inner' id='TimeLapseMenu'>"

response += "<ul class='nav'>"

response += "<li class='active'><a href='#%sByDay' onclick='GetGraphsView(%s)'>Day</a></li>"%(device, id)

response += "<li><a href='#%sByWeek' onclick=\"GetGraphsViewBy(%s, '%s')\">Week</a></li>"%(device, id, "Week")
      
response += "<li><a href='#%sByMonth' onclick=\"GetGraphsViewBy(%s, '%s')\">Month</a></li>"%(device, id, 'Month')

response += "<li><a href='#%sByYear' onclick=\"GetGraphsViewBy(%s, '%s')\">Year</a></li>"%(device, id, 'Year')

response += "</ul></div></div><br>"

response += printgraphs(GRAPH_PATH,device,type='1dnet')
response += printgraphs(GRAPH_PATH,device,type='1dpak')
response += printgraphs(GRAPH_PATH,device,type='1dflw')
response += printgraphs(GRAPH_PATH,device,type='1dcpl')
#"<div class='hero-unit' id='GraphDisplay'><h2>%s Interface Graph | 24 Hours &nbsp;<a href='#addgraph1-toview-modal' class='btn btn-inverse' id='add-graph-view' data-trigger='hover' title='Add Graph to View' data-toggle='modal'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1dnet.html' width='803px' height='2500px' scrolling='no'></iframe></div>" % (device, GRAPH_PATH, device)

#response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Packet Graph | 24 Hours &nbsp;<a href='#addgraph2-toview-modal' class='btn btn-inverse' title='Add Graph to View' data-toggle='modal'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1dpak.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, GRAPH_PATH, device)

#response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Flow Graph | 24 Hours &nbsp;<a href='#addgraph3-toview-modal' class='btn btn-inverse' title='Add Graph to View' data-toggle='modal'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1dflw.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, GRAPH_PATH, device)

#response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Net, Packet and Flow Graph | 24 Hours &nbsp;<a href='#addgraph4-toview-modal' class='btn btn-inverse' title='Add Graph to View' data-toggle='modal'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1dcpl.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, GRAPH_PATH, device)

response += "<h3 onload='startTooltip()' id='Disclaimer'>Disclaimer: This graphics might not show the complete traffic in the network devices.</h3>"

if form.has_key("uid") and form.has_key("sid") and form.has_key("remote"):

	######################### Select View option ##############################

	uid = form.getvalue("uid")

	sid = form.getvalue("sid")

	remote = form.getvalue("remote")

	ViewModel = ViewModel()

	views = ViewModel.GetAll(uid)

	selector = "<select name='to-view'>"

	for view in views:

		selector += "<option value='%s'>%s</option>"%(view[0], view[1])

	selector += "</select>"

	######################### Select View option ##############################

	######################### add graph to view form  #########################

	response += "<div class='modal hide fade' id='addgraph1-toview-modal'>"

	response += "<div class='modal-header'>"

	response += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"

	response += "<center><h2>Add Graph</h2></center>"

	response += "</div>"

	response += "<div class='modal-body'>"

	response += "<center><br><form action='../../Controllers/AddGraph2View.cgi' method='post' name='add-graph-view-form' id='add-graph-form1'>"

	response += "<input class='input-xlarge' type='text' name='graph-name' value='' placeholder='Write the Graph Name'/><br><br>"

	response += selector

	response += "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	response += "<input type='hidden' name='sid' value='%s'/>"%(sid)

	response += "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	response += "<input type='hidden' value='%s_1dnet.html' name='graph-path'/>"%(device)

	response += "</form></center>"

	response += "</div>"

	response += "<div class='modal-footer'>"

	response += "<p id='add-graph-form1-status'></p><input class='btn btn-large btn-inverse' id='addview-button' data-dismiss='modal' onclick=\"AddGraphToView(document.getElementById('add-graph-form1'))\" type='submit' value='Add'>"

	response += "</center>"

	response += "</div>"

	response += "</div>"

	######################### add graph to view form  #########################

	######################### add graph to view form  #########################

	response += "<div class='modal hide fade' id='addgraph2-toview-modal'>"

	response += "<div class='modal-header'>"

	response += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"

	response += "<center><h2>Add Graph</h2></center>"

	response += "</div>"

	response += "<div class='modal-body'>"

	response += "<center><br><form action='../../Controllers/AddGraph2View.cgi' method='post' name='add-graph-view-form' id='add-graph-form2'>"

	response += "<input class='input-xlarge' type='text' name='graph-name' value='' placeholder='Write the Graph Name'/><br><br>"

	response += selector

	response += "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	response += "<input type='hidden' name='sid' value='%s'/>"%(sid)

	response += "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	response += "<input type='hidden' value='%s_1dpak.html' name='graph-path'/>"%(device)

	response += "</form></center>"

	response += "</div>"

	response += "<div class='modal-footer'>"

	response += "<p id='add-graph-form2-status'></p><input class='btn btn-large btn-inverse' id='addview-button' onclick=\"AddGraphToView(document.getElementById('add-graph-form2'))\"' type='submit' value='Add'>"

	response += "</center>"

	response += "</div>"

	response += "</div>"

	######################### add graph to view form  #########################

	######################### add graph to view form  #########################

	response += "<div class='modal hide fade' id='addgraph3-toview-modal'>"

	response += "<div class='modal-header'>"

	response += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"

	response += "<center><h2>Add Graph</h2></center>"

	response += "</div>"

	response += "<div class='modal-body'>"

	response += "<center><br><form action='../../Controllers/AddGraph2View.cgi' method='post' name='add-graph-view-form' id='add-graph-form3'>"

	response += "<input class='input-xlarge' type='text' name='graph-name' value='' placeholder='Write the Graph Name'/><br><br>"

	response += selector

	response += "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	response += "<input type='hidden' name='sid' value='%s'/>"%(sid)

	response += "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	response += "<input type='hidden' value='%s_1dflw.html' name='graph-path'/>"%(device)

	response += "</form></center>"

	response += "</div>"

	response += "<div class='modal-footer'>"

	response += "<p id='add-graph-form3-status'></p><input class='btn btn-large btn-inverse' id='addview-button' onclick=\"AddGraphToView(document.getElementById('add-graph-form3'))\" type='submit' value='Add'>"

	response += "</center>"

	response += "</div>"

	response += "</div>"

	######################### add graph to view form  #########################

	######################### add graph to view form  #########################

	response += "<div class='modal hide fade' id='addgraph4-toview-modal'>"

	response += "<div class='modal-header'>"

	response += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"

	response += "<center><h2>Add Graph</h2></center>"

	response += "</div>"

	response += "<div class='modal-body'>"

	response += "<center><br><form action='../../Controllers/AddGraph2View.cgi' method='post' name='add-graph-view-form' id='add-graph-form4'>"

	response += "<input class='input-xlarge' type='text' name='graph-name' value='' placeholder='Write the Graph Name'/><br><br>"

	response += selector

	response += "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	response += "<input type='hidden' name='sid' value='%s'/>"%(sid)

	response += "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	response += "<input type='hidden' value='%s_1dcpl.html' name='graph-path'/>"%(device)

	response += "</form></center>"

	response += "</div>"

	response += "<div class='modal-footer'>"

	response += "<p id='add-graph-form4-status'></p><input class='btn btn-large btn-inverse' id='addview-button' onclick=\"AddGraphToView(document.getElementById('add-graph-form4'))\" type='submit' value='Add'>"

	response += "</center>"

	response += "</div>"

	response += "</div>"

	######################### add graph to view form  #########################

print "Content-Type: text/html\n\n"

print

print response
