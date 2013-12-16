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

state = form.getvalue("state")

PortModel = PortModel()

NetworkModel = NetworkModel()

html = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

if(id != 'None'):

	if(state == '1'):

		ports = PortModel.Get(id)

		for p in ports:

			html += "<label class='checkbox inline'><input name='checkboxoptions' type='checkbox' value='%s'>%s</label>"%(p[0],p[1])

	else:

		net2net = NetworkModel.GetNetwork2(id)

		for n in net2net:

			html += "<label class='checkbox inline'><input name='checkboxoptions' type='checkbox' value='%s'>%s</label>"%(n[0], n[1])

else:

	html += ""

print html