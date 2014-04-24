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

net2net = form.getvalue("n")

NetworkModel = NetworkModel()

device = NetworkModel.GetLabel(id)

if net2net != "None":

	to = NetworkModel.GetLabel(net2net)

	response = "<br>"

	response += "<div class='navbar' id='TimeLapseMenu'>"

	response += "<div class='navbar-inner' id='TimeLapseMenu'>"

	response += "<ul class='nav'>"

	response += "<li><a href='#%sto%sByDay' onclick='GetNet2NetGraphsView(%s, %s)'>Day</a></li>"%(device, to, net2net, id)

	response += "<li><a href='#%sto%sByWeek' onclick=\"GetNet2NetGraphsViewBy(%s, %s, '%s')\">Week</a></li>"%(device, to, net2net, id, 'Week')
	      
	response += "<li><a href='#%sto%sMonth' onclick=\"GetNet2NetGraphsViewBy(%s, %s, '%s')\">Month</a></li>"%(device, to, net2net, id, 'Month')

	response += "<li class='active'><a href='#%sto%sByYear' onclick=\"GetNet2NetGraphsViewBy(%s, %s, '%s')\">Year</a></li>"%(device, to, net2net, id, 'Year')

	response += "</ul></div></div><br>"

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s to %s Interface Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_%s_1anet.html' width='803px' height='2500px' scrolling='no'></iframe></div>" % (device, to, GRAPH_PATH, device, to)

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s to %s Packet Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_%s_1apak.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, to, GRAPH_PATH, device, to)

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s to %s Flow Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_%s_1aflw.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, to, GRAPH_PATH, device, to)

	response += "<div class='hero-unit' id='GraphDisplay'><h2>%s to %s Net, Packet and Flow Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_%s_1acpl.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, to, GRAPH_PATH, device, to)

	response += "<h3 id='Disclaimer'>Disclaimer: This graphics might not show the complete traffic in the network devices.</h3>"

else:

	response = "<center><iframe class=infovis src='../../../../graphs/p2p_graph.html' frameborder='0' scrolling='no'></iframe></center>"

print "Content-Type: text/html\n\n"

print

print net2net

print response
