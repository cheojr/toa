#!/usr/bin/python

import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('../../Models')
from NetworkModel import NetworkModel
from Net2NetModel import Net2NetModel
from PortModel import PortModel

cgitb.enable()

GRAPH_PATH= "../../../../../graphs"### Ojo

def DisplayGraphs(graph, link, form, id):

	type = "1d"

	r = "False"

	if form.has_key("r"):

		r = form.getfirst("r")

		if r == "True":

			en = "?id=%s" % (id)

			if form.has_key("d1"):

				d1 = form.getfirst("d1")

				en+="&d1=%s" % (d1)

			if form.has_key("d2"):

				d2 = form.getfirst("d2")

				en+="&d2=%s" % (d2)				


	if form.has_key("d"):

		type = form.getfirst("d")

		if type ==  "1w":

			pass

		elif type == "1m": 

			pass

		elif type == "1a":

			pass

		elif type == "1y":

			pass

		else:

			type="1d"

	print """<ul><li><div id="byDay" onclick="GetGraphsViewBy(%s,'1d')"><p>Day</p></div></li><li><div onclick="GetGraphsViewBy(%s,'1w')" id="byWeek"><p>Week</p></div></li><li><div onclick="GetGraphsViewBy(%s, '1m')" id="byMonth"><p>Month</p></div></li><li><div onclick="GetGraphsViewBy(%s, '1a')" id="byYear"><p>Year</p></div></li></ul>"""%(id, id, id, id)
	
	if r == "True":
		print """<script language=\"JavaScript\">{location.href=\"../../../../../graph_r.cgi%s\";self.focus();}</script>"""%(id)
		#print """<div class='graphs'><iframe frameborder="0" src="../../../../../graph_r.cgi%s" width="803px" height="2500px" scrolling="no"></iframe></div>""" % (id, en)
	
	elif type == "1d":
		print """<div class='graphs'><iframe id="frame" id="frame" frameborder="0" src='../../../../../graphs/%s_%s.html' width='803px' height='2500px' scrolling='no'></iframe></div>""" % (graph, type)

	else:
		print """<div class='graphs'><iframe frameborder='0' src='../../../../../graphs/%s_%s.html' width='803px' height='2500px' scrolling='no'></iframe></div>""" % (graph, type)


	print """<p class="graphs_display_footer">Disclaimer: This graphics might not show the complete traffic in the network devices.</p>"""


print "Content-Type: text/html\n\n"

print 

PortModel = PortModel()

NetworkModel = NetworkModel()

Net2NetModel = Net2NetModel()

form = cgi.FieldStorage()

id = -1 

if form.has_key("id"):
	
	try:
	
		id = int(form.getfirst("id"))
	
	except:
	
		id = -1

p = None

if form.has_key("p"):

	try:

		p = int(form.getfirst("p"))

	except:

		p = None

n = None

if form.has_key("n"):

	try:

		n = int(form.getfirst("n"))

	except:

		n = None

t = None

if form.has_key("t"):

	t = form.getfirst("t")

	if not t in ("o", "p", "f"):

		t = None

link = "graphs.cgi"

graph = None

if id > 0:

	if p:

		# Display Port of ID
		pInfo = PortModel.GetGraphInfo(id, p)

		if pInfo:

			graph = "%s-p%s" % (pInfo[0], pInfo[1])

			link += "?id=%s&p=%s" % (id, p)

			DisplayGraphs(graph, link, form, id)

	elif n:
		# Display Net of ID
		nInfo = Net2NetModel.GetGraphInfo(id, n)

		if nInfo and len(nInfo) == 2:

			if int(nInfo[0][0]) == id:

				graph = "%s_%s" % (nInfo[0][1],nInfo[1][1])

			else:

				graph = "%s_%s" % (nInfo[1][1],nInfo[0][1])

			link += "?id=%s&n=%s" % (id, n)

			DisplayGraphs(graph, link, form, id)
	
	else:
		# Display Default Data
		label = NetworkModel.GetLabel(id)

		if label:

			graph = "%s" % label

			link += "?id=%s" % (id)

		DisplayGraphs(graph, link, form, id)