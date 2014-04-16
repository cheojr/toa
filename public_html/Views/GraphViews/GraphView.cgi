#!/usr/bin/python

import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('../../Models')#Ojo
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
	 width:%s, height:%s, title: graphtitle , titleX: xtitle, titleY: ytitle,
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
def getGraph(type,filter,entity,h, w,portlabel,tolabel,label):

	
   	if h=='default':
		h='400'
	if w=='default':
		w='750'
	GRAPH_PATH = "../../graphs/"### Ojo
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

		graph=GRAPH_PATH+label+'_'+f
		


	elif entity=='port':
		#id is the port if (pid from the database)


		graph=GRAPH_PATH+label+'-p'+portlabel+'_'+f

	elif entity=='net2net':
		graph=GRAPH_PATH+label+'_'+tolabel+'_'+f
		
	if type=='all':
		types=['net','pak','flw','cpl']
		response=""	
		for i in range(len(types)):
			divid='viz%s'%(i+1)
			response+='#graph\n\n'+ printgraphs(graph+types[i]+'.js',types[i],w,h,divid)

	else:
			graph+=type+'.js'
		
			response='#graph\n\n'+ printgraphs(graph,type,w,h,'viz1')



	return response
# MAIN
cgitb.enable()

print "Content-Type: text/html\n\n"

print

form = cgi.FieldStorage()
if  form.has_key('label') and form.has_key('type') and form.has_key('h') and form.has_key('w') and form.has_key('filter') and form.has_key('entity') :
	type = form.getvalue("type")
	filter=form.getvalue("filter")
	entity=form.getvalue("entity")
	label=form.getvalue("label")
	portlabel=form.getvalue("portlabel")
	tolabel=form.getvalue("tolabel")
	h = form.getvalue("h")
	w = form.getvalue("w")

	print getGraph(type,filter,entity,h,w,portlabel,tolabel,label)
else:

	print 'Missing Params'


