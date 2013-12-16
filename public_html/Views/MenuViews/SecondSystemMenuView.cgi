#!/usr/bin/python

import cgi
import os
import sys
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('../../Models')
from NetworkModel import NetworkModel
from PortModel import PortModel

cgitb.enable()

print "Content-Type: text/html\n\n"
print 

form = cgi.FieldStorage()

id = form.getvalue("id")

PortModel = PortModel()

NetworkModel = NetworkModel()

form = cgi.FieldStorage()

if(form.has_key("Admin")):

	if(id != 'None'):

		ports = PortModel.Get(id)

		net2net = NetworkModel.GetNetwork2(id)

		html = "&nbsp;&nbsp;&nbsp;&nbsp;<input name='ftype' type='radio' value='0' onclick='ClearThirdSystemMenu();GetTimeSystemMenu(1);' name='selection'> I/O: The general amount of traffic in this network"

		if(len(ports)>0):

			html += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<input name='ftype' type='radio' value='1' onclick='GetThirdSystemMenu(%s, 1, 1);GetTimeSystemMenu(1);' name='selection'> Port: The traffic of a specific port"%id

		if(len(net2net)>0):

			html += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<input name='ftype' type='radio' value='2' onclick='GetThirdSystemMenu(%s, 2, 1);GetTimeSystemMenu(1);' name='selection'> P2P: Traffic from one point in the network to another"%id

		print html

	else:

		print ""

else:

	if(id != 'None'):

		ports = PortModel.Get(id)

		net2net = NetworkModel.GetNetwork2(id)

		html = "&nbsp;&nbsp;&nbsp;&nbsp;<input name='ftype' type='radio' value='0' onclick='ClearThirdSystemMenu();GetTimeSystemMenu();' name='selection'> I/O: The general amount of traffic in this network"

		if(len(ports)>0):

			html += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<input name='ftype' type='radio' value='1' onclick='GetThirdSystemMenu(%s, 1);GetTimeSystemMenu();' name='selection'> Port: The traffic of a specific port"%id

		if(len(net2net)>0):

			html += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<input name='ftype' type='radio' value='2' onclick='GetThirdSystemMenu(%s, 2);GetTimeSystemMenu();' name='selection'> P2P: Traffic from one point in the network to another"%id

		print html

	else:

		print ""