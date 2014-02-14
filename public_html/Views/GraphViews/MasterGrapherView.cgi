#!/usr/bin/python

import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('../../Models')#Ojo
from NetworkModel import NetworkModel
from ViewModel import ViewModel
from PortModel import PortModel
from Net2NetModel import Net2NetModel
def printgraphs(graph,type,w,h,divid):


   file=open(graph,'r')
   graphdata=file.read()
   response=""

   if type !='cpl':
	#Read the data for the graphs and the js functions to draw it from js file
	response+= graphdata


	response+="""
	var net = new google.visualization.AreaChart(document.getElementById('%s'));
            net.draw(data, {curveType: "function",
	 width:%s, height: %s, title: graphtitle , titleX: xtitle, titleY: ytitle,
                        vAxis: {maxValue: maxvalue}}
                );
      """%(divid,w,h)
   else:
	
	response+=graphdata

	response+= """
	    net = new google.visualization.AreaChart(document.getElementById('%s'))
            net.draw(data, {curveType: "function",
                        width:%s, height:%s,title: graphtitle, titleX: xtitle, titleY: ytitle,
                        vAxis: {maxValue: 10}}
                );
	"""%(divid,w,h)
   file.close()	
   return response
#Id, Type (all, pak, flw,col), filter(day,week,month,day), entity(device, port, Net2net),h,w(optional)
def getGraph(id,type,filter,entity,divid,h=None, w=None):

	
   	if h==None:
		h='400'
	if w==None:
		w='750'
	GRAPH_PATH = "../../graphs/"### Ojo
	networkmodel = NetworkModel()
	portmodel=PortModel()
	net2netmodel=Net2NetModel()
	graph=""
	
	if filter=='day':
		f='1d'
	elif filter=='week':
		f='1w'
	elif filter=='month':
		f='1m'
	elif filter=='year':
		f='1a'
	if entity=='device':
		#id is network id 
		#GetLabel returns the label for that id 
		label = networkmodel.GetLabel(id)

		graph=GRAPH_PATH+label+'_'+f
		


	elif entity=='port':
		#id is the port if (pid from the database)

		portlabel=str(portmodel.GetPortLabel(id)[0])
		nid=str(portmodel.GetPortNetwork(id)[0])
		label = networkmodel.GetLabel(nid)

		graph=GRAPH_PATH+label+'-p'+portlabel+'_'+f

	elif entity=='Net2net':
		ids =net2netmodel.GetFromandTo(id)[0]
		tn_id=str(ids[1])
		fn_id=str(ids[0])
		label = networkmodel.GetLabel(fn_id)
		tolabel = networkmodel.GetLabel(tn_id)
		graph=GRAPH_PATH+label+'_'+tolabel+'_'+f
		
	if type=='all':
		types=['net','pak','flw','cpl']
		response=""	
		for i in range(len(types)):
			response+='#graph\n\n'+ printgraphs(graph+types[i]+'.js',types[i],w,h,divid)

	else:
			graph+=type+'.js'
		
			response='#graph\n\n'+ printgraphs(graph,type,w,h,divid)



	return response
# MAIN
cgitb.enable()

print "Content-Type: text/html\n\n"

print

form = cgi.FieldStorage()
if form.has_key('id') and form.has_key('type') and form.has_key('filter') and form.has_key('entity') and form.has_key('divid'):
	id = form.getvalue("id")
	type = form.getvalue("type")
	filter=form.getvalue("filter")
	entity=form.getvalue("entity")
	divid=form.getvalue("divid")
	if form.has_key('h') and form.hash_key('w'):
		h=form.getvalue('h')
		w=form.getvalue('w')
	
		print getGraph(id,type,filter,entity,h,w,divid)
	else:
		print getGraph(id,type,filter,entity,divid)


else:

	print 'Missing Params'


