#!/usr/bin/python
import re
import cgi
import sys 
import os
import MySQLdb
import cgitb
from datetime import datetime
sys.path.append('../../../bin/')
from Config import Config
config=Config()
GRAPH_PATH=config.getGraphsPath()
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
def getviews(type,filter,entity,h,w,portlabel,tolabel,label,views):

   	if h=='default':
		h='400'
	if w=='default':
		w='750'
	
	paths=views.split("$")
	response=""
	i=0
	for path in paths:
		 
		if re.match('(([a-zA-Z0-9]|-|_)+_1(d|m|a|w)(net|pak|flw).js|([a-zA-Z0-9]|-|_)+_([a-zA-Z0-9]|-|_)+_1(d|m|a|w)(net|pak|flw).js|([a-zA-Z0-9]|-|_)+-p([a-zA-Z0-9]|-|_)+_1(d|m|a|w)(net|pak|flw).js)$',path)!=None:
			divid='view%s'%(i+1)
			response+='#graph\n\n'+ printgraphs(GRAPH_PATH+path,'net',w,h,divid)
		
		elif re.match('(([a-zA-Z0-9]|-|_)+_1(d|m|a|w)cpl.js|([a-zA-Z0-9]|-|_)+_([a-zA-Z0-9]|-|_)+_1(d|m|a|w)cpl.js|([a-zA-Z0-9]|-|_)+-p([a-zA-Z0-9]|-|_)+_1(d|m|a|w)cpl.js)$',path)!=None:

			divid='view%s'%(i+1)
			response+='#graph\n\n'+ printgraphs(GRAPH_PATH+path,'cpl',w,h,divid)
		else:
			response+= '#graph ERROR: wrong path %s format for views'%(path)
		i+=1
	return response
#Id, Type (all, pak, flw,col), filter(day,week,month,day), entity(device, port, Net2net),h,w(optional)
def getGraph(type,filter,entity,h, w,portlabel,tolabel,label):

	
   	if h=='default':
		h='400'
	if w=='default':
		w='750'
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
if form.has_key('views') and   form.has_key('label') and form.has_key('type') and form.has_key('h') and form.has_key('w') and form.has_key('filter') and form.has_key('entity') :
	type = form.getvalue("type")
	filter=form.getvalue("filter")
	entity=form.getvalue("entity")
	label=form.getvalue("label")
	portlabel=form.getvalue("portlabel")
	tolabel=form.getvalue("tolabel")
	h = form.getvalue("h")
	w = form.getvalue("w")
	views=form.getvalue("views")
	paths=views.split("#")
	

	if type=='all' or type=='net' or   type=='pak' or type=='flw' or type=='cpl':
		if filter == 'day' or filter=='week' or filter=='month' or filter=='year':
			if entity == 'net2net' or entity == 'port' or entity=='device' or entity=='views':
				if re.match('([a-zA-Z0-9]|-)+$',label)!=None:
					if re.match('([a-zA-Z0-9]|-)+$',portlabel)!=None:
						if re.match('([a-zA-Z0-9]|-)+$',tolabel)!=None:
							if re.match('([0-9]+|default)$',h)!=None:
								if re.match('([0-9]+|default)$',w)!=None:
									if entity=='views':
									
										print getviews(type,filter,entity,h,w,portlabel,tolabel,label,views)
									else:
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

	print 'Missing Params'


