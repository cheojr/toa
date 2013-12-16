#!/usr/bin/python

########### Imports #######################

import cgi
import sys 
import os
import cgitb
import datetime
import urllib, hashlib
import sys
sys.path.append("../../Models")
from GraphModel import GraphModel
from ViewModel import ViewModel

cgitb.enable()

########## Imports #######################

############### Init #######################

print "Content-Type: text/html\n\n"

print 

form = cgi.FieldStorage()#getting the values of the form in case of a validation error

vid = form.getvalue("vid")

GraphModel = GraphModel()

ViewModel = ViewModel()

graph_ids = ViewModel.GetViewGraphs(vid)

response = "<table class='table' id='viewer-table'>"

count = 1

for gid in graph_ids:

	if count == 1:

		response += "<tr>"

	path = GraphModel.Get("graph_path", "gid", gid[0])

	response += "<td><iframe scrolling='no' id='viewer-frame' src='/graphtest/%s'></iframe></td>"%path[0][0]

	if count%2 == 0 and not count == 1:

		response += "</tr>"	

	count += 1	

response += "</table>"

print response

del GraphModel

del ViewModel