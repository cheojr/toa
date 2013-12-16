#!/usr/bin/python

######################### imports  #########################

import cgi
import sys 
import os
import cgitb
import datetime
import urllib, hashlib
import sys
sys.path.append("Models")
from NetworkModel import NetworkModel
from PortModel import PortModel
from Net2NetModel import Net2NetModel

######################### imports  #########################

######################### headers  #########################

print "Content-Type: text/html"     

print 

print "<!DOCTYPE html><html>"

print "<head>"

print "<title>ToaNMS</title>"

print """<link rel="stylesheet" href="Style/bootstrap/css/style.css"/>"""

print """<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>"""

print """<script src="Style/bootstrap/js/bootstrap.min.js"></script>"""

print "<script type='text/javascript' src='http://platform.twitter.com/widgets.js'></script>"

print """<script src="Controllers/GraphController.js"></script>"""

print """<script src='Style/bootstrap/js/helpers.js'></script>"""

print "</head>"

######################### headers #########################

print "<body>"

######################### banner  #########################

print """<div class="row-fluid" id="banner">"""

print """<div class="span8 offset1" id="app-name">"""
		
print """<h1>Toa Network Monitoring System</h1>"""

print "</div>"

print """<div class="span2 offset1" id="login">"""
		
print """<div class="btn-group">"""

print """<a href=#login-form-modal data-toggle="modal" class="btn btn-large btn-inverse" id="login-button">Login</a>"""

print "</div>"

print "</div>"

print "</div>"

######################### banner  #########################

######################### login form  #########################

print """<div class="modal hide fade" id="login-form-modal">"""

print """<div class="modal-header">"""

print """<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>"""

print """<center><h2>Toa Login</h2></center>"""

print "</div>"

print """<div class="modal-body">"""

print """<center><br><form action="Controllers/AuthenticationController.cgi" method="post" class="form-horizontal">"""

print """<div class="input-prepend">"""

print """<span class="add-on"><i class="icon-envelope"></i></span>"""

print """<input class="span4" id="prependedInput" type="text" name="username" placeholder="Username">"""

print "</div><br><br>"

print """<div class="input-prepend">"""

print """<span class="add-on"><i class="icon-lock"></i></span>"""

print """<input class="span4" id="prependedInput" type="password" name="password" placeholder="Password">"""

print "</div>"

print "</div>"

print """<div class="modal-footer">"""

print """<input class="btn btn-large btn-inverse" id="login-button" type="submit" value="Login">"""

print "</form></center>"

print "</div>"

print "</div>"

######################### login form  #########################

######################### content  #########################

print "<div class='row' id='FeatureBar'>"

print "<br>"

print "<div class='span11 offset1'>"

print """<div class="btn-group">"""

print """<a href='#DeviceMenu' data-toggle="dropdown" class="btn btn-large btn-inverse dropdown-toggle" id="device-button">Device</a>"""		

print "<ul class='dropdown-menu' role='menu'>"

NetworkModel = NetworkModel()

PortModel = PortModel()

Net2NetModel = Net2NetModel()

devices = NetworkModel.GetAll()

for device in devices:

	print "<li class='dropdown-submenu parent'><a href=#Device class='dropdown-hover'>%s</a><ul class='dropdown-menu' id='TripleOptionMenu'><li><a href='#%sInterfaceGraph' onclick='GetGraphsView(%s)'>Interface Graph</a></li><li><a href='#%sPortGraph' onclick=\"GetGraphsView(%s)\">Port Graph<br><select id='PortSelection' onchange='GetPortGraphsView(this.options[this.selectedIndex].value, %s)'>"%(device[1], device[1], device[0], device[0], device[1], device[0])

	ports = PortModel.Get(device[0])

	print "<option value='None'>Select</option>"

	for port in ports:

		print "<option value='%s'>%s</option>"%(port[1], port[1])

	print "</select></a></li><li><a href='#%sNet2NetGraph'>Net2Net Graph<br><select id='N2NSelection' onchange='GetNet2NetGraphsView(this.options[this.selectedIndex].value, %s)'>"%(device[1], device[0])

	net2nets = Net2NetModel.Get(device[0])

	print "<option value='None'>Select</option>"

	for net2net in net2nets:

		print "<option value='%s'>%s</option>"%(net2net[2], net2net[1])

	print "</select></a></li></ul></li>"

del NetworkModel

del PortModel

del Net2NetModel

print "</ul>"

print "</div>"

print "</div></div>"

print "<br>"

print "<div class='row-fluid' id='Parent'>"

print "<div class='span12'>"

print """<div class="container" id="content">"""

print """<center><iframe class=infovis src='../../../../graphs/p2p_graph.html' frameborder='0' scrolling='no'></iframe></center>"""	

print "</div>"

print "</div>"

######################### content  #########################

print "</body>"

print "</html>"
