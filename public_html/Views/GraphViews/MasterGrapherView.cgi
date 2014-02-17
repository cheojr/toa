#!/usr/bin/python
<<<<<<< HEAD
import re
=======

>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661
import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('../../Models')#Ojo
<<<<<<< HEAD
=======
from NetworkModel import NetworkModel
from ViewModel import ViewModel
from PortModel import PortModel
from Net2NetModel import Net2NetModel
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661
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
<<<<<<< HEAD
	 width:%s, height:%s, title: graphtitle , titleX: xtitle, titleY: ytitle,
=======
	 width:%s, height: %s, title: graphtitle , titleX: xtitle, titleY: ytitle,
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661
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
<<<<<<< HEAD

   file.close()	
   return response
#Id, Type (all, pak, flw,col), filter(day,week,month,day), entity(device, port, Net2net),h,w(optional)
def getGraph(type,filter,entity,h, w,portlabel,tolabel,label):

	
   	if h=='default':
		h='400'
	if w=='default':
		w='750'
	GRAPH_PATH = "../../graphs/"### Ojo
=======
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
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661
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
<<<<<<< HEAD
=======
		label = networkmodel.GetLabel(id)
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661

		graph=GRAPH_PATH+label+'_'+f
		


	elif entity=='port':
		#id is the port if (pid from the database)

<<<<<<< HEAD

		graph=GRAPH_PATH+label+'-p'+portlabel+'_'+f

	elif entity=='net2net':
=======
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
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661
		graph=GRAPH_PATH+label+'_'+tolabel+'_'+f
		
	if type=='all':
		types=['net','pak','flw','cpl']
		response=""	
		for i in range(len(types)):
<<<<<<< HEAD
			divid='viz%s'%(i+1)
=======
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661
			response+='#graph\n\n'+ printgraphs(graph+types[i]+'.js',types[i],w,h,divid)

	else:
			graph+=type+'.js'
		
<<<<<<< HEAD
			response='#graph\n\n'+ printgraphs(graph,type,w,h,'viz1')
=======
			response='#graph\n\n'+ printgraphs(graph,type,w,h,divid)
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661



	return response
# MAIN
cgitb.enable()

print "Content-Type: text/html\n\n"

print

form = cgi.FieldStorage()
<<<<<<< HEAD
if  form.has_key('label') and form.has_key('type') and form.has_key('h') and form.has_key('w') and form.has_key('filter') and form.has_key('entity') :
	type = form.getvalue("type")
	filter=form.getvalue("filter")
	entity=form.getvalue("entity")
	label=form.getvalue("label")
	portlabel=form.getvalue("portlabel")
	tolabel=form.getvalue("tolabel")
	h = form.getvalue("h")
	w = form.getvalue("w")

	if type=='all' or type=='net' or   type=='pak' or type=='flw' or type=='cpl':
		if filter == 'day' or filter=='week' or filter=='month' or filter=='year':
			if entity == 'net2net' or entity == 'port' or entity=='device':
				if re.match('([a-zA-Z0-9]|-)+$',label)!=None:
					if re.match('([a-zA-Z0-9]|-)+$',portlabel)!=None:
						if re.match('([a-zA-Z0-9]|-)+$',tolabel)!=None:
							if re.match('([0-9]+|default)$',h)!=None:
								if re.match('([0-9]+|default)$',w)!=None:
									print getGraph(type,filter,entity,h,w,portlabel,tolabel,label)
								else:
									print 'ERROR: w param is not valid\n'
							else:
								print 'ERROR: h param is not valid\n'
						else:
							print 'ERROR: tolabel param is not valid\n'
					else:
						print 'ERROR: portlabel param is not valid\n'
				else:
					print 'ERROR: label param is not valid'
			else:
				print 'ERROR: entity param not valid'
		else:
			print 'ERROR: filter param not valid'
	else:
		print 'ERROR: type param not valid'	
else:	
=======
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
>>>>>>> c8e24b9a6553065e44cc5c67da4a8b02d6bd3661

	print 'Missing Params'


