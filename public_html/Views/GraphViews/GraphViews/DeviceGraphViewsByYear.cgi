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

type = form.getvalue("type")

NetworkModel = NetworkModel()

device = NetworkModel.GetLabel(id)

response = "<br>"

response += "<div class='navbar' id='TimeLapseMenu'>"

response += "<div class='navbar-inner' id='TimeLapseMenu'>"

response += "<ul class='nav'>"

response += "<li><a href='#%sByDay' onclick='GetGraphsView(%s)'>Day</a></li>"%(device, id)

response += "<li><a href='#%sByWeek' onclick=\"GetGraphsViewBy(%s, '%s')\">Week</a></li>"%(device, id, 'Week')
      
response += "<li><a href='#%sByMonth' onclick=\"GetGraphsViewBy(%s, '%s')\">Month</a></li>"%(device, id, 'Month')

response += "<li class='active'><a href='#%sByYear' onclick=\"GetGraphsViewBy(%s, '%s')\">Year</a></li>"%(device, id, 'Year')

response += "</ul></div></div><br>"

response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Interface Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1anet.html' width='803px' height='2500px' scrolling='no'></iframe></div>" % (device, GRAPH_PATH, device)

response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Packet Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1apak.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, GRAPH_PATH, device)

response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Flow Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1aflw.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, GRAPH_PATH, device)

response += "<div class='hero-unit' id='GraphDisplay'><h2>%s Net, Packet and Flow Graph | 1 Year &nbsp;<a href='#AddToView' class='btn btn-inverse'>+</a></h2><iframe id='frame' id='frame' frameborder='0' src='%s%s_1acpl.html' width='803px' height='2500px' scrolling='no'></iframe></div>"% (device, GRAPH_PATH, device)

response += "<h3 id='Disclaimer'>Disclaimer: This graphics might not show the complete traffic in the network devices.</h3>"

print "Content-Type: text/html\n\n"

print

print response