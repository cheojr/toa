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

if (GraphModel.connect() and ViewModel.connect()):

	graph_ids = ViewModel.GetViewGraphs(vid)

	response = ""

	count = 1

	for gid in graph_ids:

		response += "<div class='row-fluid'>"

		path = GraphModel.Get("graph_path", "gid", gid[0])

		if count%2 == 0:

			response += "<div class='span7 pull-right'><iframe scrolling='no' id='viewer-frame' src='/graphtest/%s'></iframe></div>"%path[0][0]

		else:

			response += "<div class='span7 pull-left'><iframe scrolling='no' id='viewer-frame' src='/graphtest/%s'></iframe></div>"%path[0][0]

		response += "</div>"

		count += 1

else:

	response = "Database Connection Error. Please Contact Administrator."	

print response

del GraphModel

del ViewModel