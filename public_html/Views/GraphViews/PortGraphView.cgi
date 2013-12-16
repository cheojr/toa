#!/usr/bin/python

import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('/var/www/html/development/TOANMS/bootstrap_html/Models')
from NetworkModel import NetworkModel

cgitb.enable()

GRAPH_PATH = "/graphtest/"### Ojo

form = cgi.FieldStorage()

id = form.getvalue("id")

port = form.getvalue("port")

NetworkModel = NetworkModel()

device = NetworkModel.GetLabel(id)

if port != "None":

	response = "<br>"

	response += "<div class='navbar' id='TimeLapseMenu'>"

	response += "<div class='navbar-inner' id='TimeLapseMenu'>"

	response += "<ul class='nav'>"

	response += "<li class='active'><a href='#%sPort%sByDay' onclick='GetPortGraphsView(%s, %s)'>Day</a></li>"%(device, port, port, id)

	response += "<li><a href='#%sPort%sByWeek' onclick=\"GetPortGraphsViewBy(%s, %s, '%s')\">Week</a></li>"%(device, port, id, port, 'Week')
	      
	response += "<li><a href='#%sPort%sByMonth' onclick\"GetPortGraphsViewBy(%s, %s, '%s')\">Month</a></li>"%(device, port, id, port, 'Month')

	response += "<li><a href='#%sPort%sByYear' onclick=\"GetPortGraphsViewBy(%s, %s, '%s')\">Year</a></li>"%(device, port, id, port, 'Year')

	response += "</ul></div></div><br>"

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Port %s Interface Graph | 24 Hours &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s-p%s_1dnet.html' width='803px' height='2500px' scrolling='no'></iframe></div>" % (device, port, GRAPH_PATH, device, port)

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Port %s Packet Graph | 24 Hours &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s-p%s_1dpak.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, port, GRAPH_PATH, device, port)

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Port %s Flow Graph | 24 Hours &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s-p%s_1dflw.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, port, GRAPH_PATH, device, port)

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Port %s Net, Packet and Flow Graph | 24 Hours &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s-p%s_1dcpl.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, port, GRAPH_PATH, device, port)

	response += "<h3 id='Disclaimer'>Disclaimer: This graphics might not show the complete traffic in the network devices.</h3>"

else:

	response = "<center><iframe class=infovis src='../../../../graphs/p2p_graph.html' frameborder='0' scrolling='no'></iframe></center>"

print "Content-Type: text/html\n\n"

print

print response
