
#This script is in charge of creating the graph files that are stored in /var/www/html/graphs and are displayed in the page. These functions are called from flowsgrapher.py located in /opt/nap/bin/ 

import MySQLdb
import time
from functions import *
from QueryBuilder import *
from os.path import join as pjoin
import sys
from Config import Config
config=Config()
DB_NAME=config.getDBName();
DB_HOST='localhost'
DB_USER=config.getUser();
DB_PASS=config.getPassword();

INCREMENT=config.getCronTime()

interval_modulation=INCREMENT #sets the number that thetime is going to be modulated by, should be the same as the time increment (if 5min then 300)so that if the module is 0 then the unixtime has ben incremented correctly 
db = MySQLdb.connect(user=DB_USER, passwd=DB_PASS, db=DB_NAME, host=DB_HOST)
c = db.cursor()

def normalizeall (input,output,rangeb,rangea):# Currently disabled
        #VERIFICAR WHILE DEBIDO A QUE LOS QUIERIES SON < y no <=
        start=rangeb
        end=rangea
        join = [[0 for i in range(7)] for j in range(((end-start)/300)-1)]
        c1=c2=x=0
        start =( start - start%300) + 300
        while start <end :
            if c1<len(input) and input[c1][3]==start :
                join[x][0]=input[c1][0]
                join[x][2]=input[c1][1]
                join[x][4]=input[c1][2]
                c1=c1+1
            else:
                join[x][0]=0
                join[x][2]=0
                join[x][4]=0
            if c2<len(output) and output[c2][3]==start  :
                join[x][1]=output[c2][0]
                join[x][3]=output[c2][1]
                join[x][5]=output[c2][2]
                c2=c2+1
            else:
                join[x][1]=0
                join[x][3]=0
                join[x][5]=0

            join[x][6]=start
            start=start+INCREMENT
            x=x+1

        #print "Content-type:text/html\r\n\r\n"
        t=tuple(tuple(x) for x in join)
        #print '<html> %s  %s  %s </html>'%(rangea-rangeb,x,t)
        return t


def normalize (input,output,rangeb,rangea):
        #VERIFICAR WHILE DEBIDO A QUE LOS QUIERIES SON < y no <=
        start=rangeb
        end=rangea
        join = [[0 for i in range(3)] for j in range(((end-start)/300)-1)]
        c1=c2=x=0
        start =( start - start%300) + 300
        while start <end :
          
            if c1<len(input) and  input[c1][1]==start  :
                join[x][0]=input[c1][0]
                c1=c1+1
            else:
                join[x][0]=0
            if c2<len(output) and output[c2][1]==start :
                join[x][1]=output[c2][0]
                c2=c2+1
            else:
                join[x][1]=0

            join[x][2]=start
            start=start+INCREMENT
            x=x+1

        #print "Content-type:text/html\r\n\r\n"
        t=tuple(tuple(x) for x in join)
        #print '<html> %s  %s  %s </html>'%(rangea-rangeb,x,t)
        return t


def setsizetype_all(row,sizetype):
        #this function sets the type of size (MB,GB,KB...) that the data is. This is done to resize them on the graph propperly .
        # It its specifically for the graph that displays all because it sizetype is an array that will hold the sizes of the octects,flows, and packets. 
        #It receives row which is an array that contains all the data, and sizetype which is the array that is going to be modified and returned 
        max=[0,0,0]
        #Does not return the max because in the "all" graph that is not dispayed 


        if len(row) >0:

                for i in range (len(row)):
                        t=0
                        for m in range (len(max)):
                                if max[m] <row[i][t]:
                                        max[m]=row[i][t]
                                if max[m] <row[i][t+1]:
                                        max[m]=row[i][t+1]
                                t+=2

                for i in range(len(max)):

                        if max[i] >= 1073741824:
                                sizetype[i]="GB"
                        elif max[i] >= 1048576:
                                sizetype[i]="MB"
                        elif max[i] >= 1024:
                                sizetype[i]="KB"
                        else:
                                sizetype[i]="bytes"
                return sizetype

def setsizetype (row,sizetype):
        #this function sets the type of size (MB,GB,KB...) that the data is and returns it in the variable sizetype.  This is done to resize them on the graph propperly .
                # It its specifically for the individual graphs that display octects or packets or flows
                #It receives row which is an array that contains all the data                                                                           
                # It returns the max and min of the data 
	max=0;
	min=0; 	
	sizetype="bytes"
	
	if len(row) > 0:# If row has elements (If there is data in the database) 
		max=row[0][0]
		min=row[0][1]
		for m in range(len(row)):
			if max<row[m][0]:
				max=row[m][0]
			if max <row[m][1]:
				max=row[m][1]
			if min>row[m][0]:
				min=row[m][0]
			if min >row[m][1]:
				min=row[m][1]
	       
                if max >= 1073741824:
                       sizetype = "GB"
                elif max >= 1048576:
                       sizetype = "MB"
                elif max >= 1024:
                       sizetype = "KB"
		
	return sizetype,max,min;	

def gen_ioscript_header(fd,sizetype):
        # This function is for the individual graphs
        # This function writes the headers for the graphs. It receives fd which is the pointer to the file and sizetype indicating the size of the data to be specified so that the graphs labels them as such 
	fd.write(("""
        <script type="text/javascript">
        google.load('visualization', '1', {packages: ['corechart']});
        </script> <script type="text/javascript">
        function drawVisualization() {
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn(\'number\', \'Input %s \');
        data.addColumn(\'number\', \'Output %s \');""")%(sizetype,sizetype))
	
def gen_ioascript_header(fd,sizetype):
        # This function is for the "all" graphs
        # This function writes the headers for the graphs. It receives fd which is the pointer to the file and sizetype indicating the size of the data to be specified so that the graphs labels them as such 
	fd.write("""<script type="text/javascript">
      google.load('visualization', '1', {packages: ['corechart']});

    </script> <script type="text/javascript">
      function drawVisualization() {
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn(\'number\', \'Octects Input %s \');
        data.addColumn(\'number\', \'Octects Output  %s\');
        data.addColumn(\'number\', \'Packets Input  %s \');
        data.addColumn(\'number\', \'Packets Output %s \');
        data.addColumn(\'number\', \'Flows Input %s \');
        data.addColumn(\'number\', \'Flows Output %s \');""" %(sizetype[0],sizetype[0],sizetype[1],sizetype[1],sizetype[2],sizetype[2]))
	
	

def gen_iodata(fd, now, first, sizetype, row, evaluate, type=None):
        # This function writes the data columns for the graphs
        #Itreceives the file pointer (fd), the current unix time(now), the starting point to plot the graph (first) , the sizetype of the data (sizetype), the data (row), and evaluate which indicates if its a graph of data,month,week or year

        #For each time laps of the graph (day,weeek...) the increments in time of the plots in the graph are different, if we have a year we cant graph every 5 minutes because the amount of points will be hard to understand and the browser may crash

	if evaluate == "D":
		sumador = INCREMENT
	elif evaluate == "S":
		sumador = INCREMENT*6
	elif evaluate == "M":
		sumador = INCREMENT * 24
	elif evaluate == "A":
		sumador = INCREMENT * 288
	
	data1=0.00
	data2=0.00

	limit=first+sumador
	counter=0
	typediv=1

        # Depending on the sizetype the typediv is set and then used to divide and scale the data
	if sizetype=="KB":
		typediv=1024.0
	elif sizetype=="MB":
		typediv=1048576.0
	elif sizetype=="GB":
		typediv=1073741824.0

	i = 0 # iterator 
	time_graph = 0#variable that will hold the timstamp 
	



	#print first
	while first <= now: # loops while the the starting point hasnt reached the current time which is when the graph ends
		
		while first < limit: # limit represents the end of the interval of data that is going to create a single point in the graph.
                        # for a day that interval is the same increments in which data is inserted in the database for the rest is a period of time specified in "sumador" , then we use this loop to take all the data of that time interval and avarege it out 
	


	                if  i < len(row) and first==(row[i][2]-(row[i][2]%INCREMENT)): # if the counter is in the sizeof the array and the timestamp in the database correspons to the time whre the graph is going to put it
    # The row[i][2]-(row[i][2]%INCREMENT  is jsut in case the data point in the array does not contain a time stamp that falls in the correct  increments, it is then brought back to the increment before it                                 
				data1=data1 + row[i][0]
				data2=data2 + row[i][1]
				
					
				
				time_graph = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(first))
	                        i+=1
	                        
	                else:
                                # if the times do not match or the counter is bigger then the array (which means the time of the graph has exceeded the amount of data available, then we just put 0
				data1=data1 + 0
				data2=data2 + 0
				time_graph = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(first))
			first+=INCREMENT  # keep incrementing first untill it reaches limit 
			counter=counter+1
		
		avgdata1=data1/counter#averages the data out, if in the graph a single day then counter will be 1
		avgdata2=data2/counter
	 
		timedisplay=time_graph.split("-")
                # Sets the time stamp to be display in the graph, if its a day, then it only displays the hours, if its a week then it displays the das and the hour and so on 
		if evaluate=="D":

			split_time=timedisplay[2].split(" ")
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f]); """ % (split_time[1], avgdata1/typediv, avgdata2/typediv))
		
		elif evaluate=="S":
			
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f]); """ % (timedisplay[2], avgdata1/typediv, avgdata2/typediv))
		elif evaluate=="M":
			
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f]); """ % (timedisplay[1]+" "+timedisplay[2], avgdata1/typediv, avgdata2/typediv))

		else:	
			
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f]); """ % (time_graph, avgdata1/typediv, avgdata2/typediv))


		counter=0
	        limit=limit+sumador # Once first reaches limit we increment the limit again, and start a new loop in a new interval that is going to correpond to a point in the graph
                
		data1=data2=0 # once we enter a new interval we reset data to 0 so it doesnt affect the avareges of the new interval/point in graph

def gen_ioadata(fd, now, first,sizetype,row, evaluate, type=None):

        # This function writes the data columns for the " all" graph
        #Itreceives the file pointer (fd), the current unix time and end point (now), the starting point to plot the graph (first) , the sizetype for all the data (sizetype), the data (row), and evaluate which indicates if its a graph of data,month,week or year


        #For each time laps of the graph (day,weeek...) the increments in time of the plots in the graph are different, if we have a year we cant graph every 5 minutes because the amount of points will be hard to understand and the browser may crash

	if evaluate == "D":
		sumador = INCREMENT
	elif evaluate == "S":
		sumador = 1800
	elif evaluate == "M":
		sumador = 7200
	elif evaluate == "A":
		sumador = 86400
 # We hace six dara points for the inputs and outputs of the octects, packets and flows	
	data1=0.0
	data2=0.0
	data3=0.0
	data4=0.0
	data5=0.0
	data6=0.0
	limit=first+sumador
	counter=0

	graph_data = ""
	i = 0
	

	typediv=[1,1,1]

        for i in range(len(sizetype)): #loops through each of the inputs and outputs of the 3 types of data (o,p and f) 	
		if sizetype[i]=="KB":
			typediv[i]=1024.0
		elif sizetype[i]=="MB":
			typediv[i]=1048576.0
		elif sizetype[i]=="GB":
			typediv[i]=1073741824.0

        

        while row and first <= now: # loops while the the starting point hasnt reached the current time which is when the graph ends

		while first <= limit: # limit represents the end of the interval of data that is going to create a single point in the graph.
                                            # for a day that interval is the same increments in which data is inserted in the database for the rest is a period of time specified in "sumador" , then we use this loop to take all the data of that time interval and avarege it out 



                            #dbtime=dbtime-(dbtime%300)
			if  i < len(row) and first==(row[i][6] -(row[i][6]%INCREMENT)):
                             # The row[i][2]-(row[i][2]%INCREMENT  is jsut in case the data point in the array does not contain a time stamp that falls in the correct  increments, it is then brought back to the increment before it  
                                data1=data1 + row[i][0]
                                data2=data2 + row[i][1]
                                data3=data3 + row[i][2]
                                data4=data4 + row[i][3]
                                data5=data5 + row[i][4]
                                data6=data6 + row[i][5]
                                i+=1
				
				time_graph = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(first))
                        else:
                                 # if the times do not match or the counter is bigger then the array (which means the time of the graph has exceeded the amount of data available, then we just put 0

                                data1=data1 + 0
                                data2=data2 + 0
                                data3=data3 + 0
                                data4=data4 + 0
                                data5=data5 + 0
                                data6=data6 + 0
				time_graph = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(first))
		
			first+=INCREMENT
			counter=counter+1
                #averages the data out, if in the graph a single day then counter will be 1

		avgdata1=data1/counter#avgdata es el promedio de la data calculado
		avgdata2=data2/counter
		avgdata3=data3/counter#avgdata es el promedio de la data calculado
		avgdata4=data4/counter
		avgdata5=data5/counter#avgdata es el promedio de la data calculado
		avgdata6=data6/counter
		timedisplay=time_graph.split("-")
                if evaluate=="D":

                        split_time=timedisplay[2].split(" ")
	
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f, %.2f, %.2f, %.2f, %.2f]); """ % (split_time[1], avgdata1/typediv[0], avgdata2/typediv[0], avgdata3/typediv[1],avgdata4/typediv[1],avgdata5/typediv[2],avgdata6/typediv[2]))
             	elif evaluate=="S":
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f, %.2f, %.2f, %.2f, %.2f]); """ % (timedisplay[1], avgdata1/typediv[0], avgdata2/typediv[0], avgdata3/typediv[1],avgdata4/typediv[1],avgdata5/typediv[2],avgdata6/typediv[2]))

		elif evaluate=="M":
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f, %.2f, %.2f, %.2f, %.2f]); """ % (timedisplay[1] +" "+ timedisplay[2], avgdata1/typediv[0], avgdata2/typediv[0], avgdata3/typediv[1],avgdata4/typediv[1],avgdata5/typediv[2],avgdata6/typediv[2]))
		else :
			  
			fd.write(""" data.addRow(["'%s'", %.2f, %.2f, %.2f, %.2f, %.2f, %.2f]); """ % (time_graph, avgdata1/typediv[0], avgdata2/typediv[0], avgdata3/typediv[1],avgdata4/typediv[1],avgdata5/typediv[2],avgdata6/typediv[2]))
		counter=0
	        limit=limit+sumador
		data1=data2=data3=data4=data5=data6=0
		

def gen_ioscript_footer(fd, label, type,graphname,max,min,sizetype):
	
        #Function to write the footer of the individual graphs
        # It receives fd which is the poibnter to the file, label which is the title of the graph,  graphname  which is the name  of the network the graph corresponds to, type which indicates the type of the data (packets,flows,etc) , the max and min , and the size type (MB,GB,KB...) 

        # sets the number to be divided to scale down the data with the sizetype (NOTE: remember to turn this into a function)
        if sizetype=="KB":
                typediv=1024.0
        elif sizetype=="MB":
                typediv=1048576.0
        elif sizetype=="GB":
                typediv=1073741824.0
	else:
		typediv=1

        if min >= 1073741824:
                minlabel = "%.2f GB" % (min / 1073741824.0)
        elif min >= 1048576:
                minlabel = "%.2f MB" % (min / 1048576.0)
        elif min >= 1024:
                minlabel = "%.2f KB" % (min / 1024.0)
        else:
                minlabel = "%.2f bytes" % min 

        fd.write("""var net = new google.visualization.AreaChart(document.getElementById('%s'));
            net.draw(data, {curveType: "function",
	 width:750, height: 400, title: '%s  Traffic  %s  Max: %.2f %s  Min: %s', titleX: 'Time', titleY: '%s',
                        vAxis: {maxValue: '%s'}}
                );
        
                //setTimeout(test, 1000* 10) ; 
      }
      function test(data, net){
                data.addRow(["asa", 0,0]) ;
                net.draw(data) ;
                setTimeout(test, 1000* 10) ; 
      }
      google.setOnLoadCallback(drawVisualization);
      </script>
      <div id="%s" style="width: 900px; height: 600px;"></div>""" % (graphname, label, type,max/typediv,sizetype,minlabel, type, int(max/typediv), graphname))


def gen_ioascript_footer(fd, label, graphname): 

        #Function to write the footer of the "all"  graph
        # It receives fd which is the poibnter to the file, label which is the title of the graph,  graphname  which is the name  of the network the graph corresponds to
        # sets the number to be divided to scale down the data with the sizetype (NOTE: remember to turn this into a function)
	fd.write("""net = new google.visualization.AreaChart(document.getElementById('%s'))
            net.draw(data, {curveType: "function",
                        width:750, height: 400,title: '%s Net Traffic ', titleX: 'Time', titleY: 'All',
                        vAxis: {maxValue: 10}}
                );

      }


      google.setOnLoadCallback(drawVisualization);
    </script>
<div id="%s" style="width: 900px; height: 400px;"></div>""" % (graphname,label,graphname))	

###################################Functions called from the flowsgrapher.py script that use the functions defined above ###################################

def graphInt24h(now, label, id, path):

        
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 24 hour single network graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label, the id of the network and th path where it is going to be written 
        
    qb = QueryBuilder()#object to use the functions defined in QueryBuilder.py  to retreive data from the database 
	
    FILE1=open(pjoin(path, label+ "_1dnet.html"), "w")

    FILE1.write(gen_header()) # writes a file  on /var/www/html/graphs with the name  "label"_1d.html

    FILE2=open(pjoin(path, label+ "_1dpak.html"), "w")

    FILE2.write(gen_header()) # writes a file  on /var/www/html/graphs with the name  "label"_1d.html

    FILE3=open(pjoin(path, label+ "_1dflw.html"), "w")

    FILE3.write(gen_header()) # writes a file  on /var/www/html/graphs with the name  "label"_1d.html

    FILE4=open(pjoin(path, label+ "_1dcpl.html"), "w")

    FILE4.write(gen_header()) # writes a file  on /var/www/html/graphs with the name  "label"_1d.html

    sizetype="bytes"
    sizetype_array=["bytes","bytes","bytes"]

    first=now-86400 #first is initialized by sunstracting 24 hours in unix time to our current unix time
	#print first;
	# The I/O Network data (24h)
	
    row = qb.IntRangeO(c, id, now, first) #Gets the dara from the database
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype, row, "D")
    gen_ioscript_footer(FILE1, label, "Network", "viz1",max,min,sizetype) 

	
	# The I/O Packet data(24h)
		
    row = qb.IntRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)

    gen_iodata(FILE2, now, first,sizetype,row, "D")
    gen_ioscript_footer(FILE2, label, "Packet", "viz2",max,min,sizetype) 
	# The I/O Flow data(24h)

	
    row = qb.IntRangeF(c, id, now, first)
		
    sizetype,max,min=setsizetype(row,sizetype)
		
    gen_ioscript_header(FILE3,sizetype)

    gen_iodata(FILE3, now, first,sizetype, row, "D")
    gen_ioscript_footer(FILE3, label, "Flows", "viz3",max,min,sizetype) 
	# The I/O network, packet, flow(24h)

    row = qb.IntRangeAll(c, id, now, first)
	
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first,sizetype_array,row, "D")
    gen_ioascript_footer(FILE4, label, "viz4")
	
    FILE1.write(gen_footer())

    FILE2.write(gen_footer())

    FILE3.write(gen_footer())

    FILE4.write(gen_footer())

##################################################################	
def graphInt1s(now, label, id, path):
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1  week  single network graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label, the id of the network and th path where it is going to be written 

    qb = QueryBuilder()

    FILE1=open(pjoin(path,label+ "_1wnet.html"), "w")
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,label+ "_1wpak.html"), "w")
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,label+ "_1wflw.html"), "w")
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,label+ "_1wcpl.html"), "w")
    FILE4.write(gen_header())
    first=now-604800

    sizetype_array=["bytes","bytes","bytes"]
    sizetype="bytes"
	#The I/O Network data (1s)
	
    row = qb.IntRangeO(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first,sizetype, row, "S")
    gen_ioscript_footer(FILE1, label, "Network", "viz1",max,min,sizetype) 
	
	#The I/O Packet data (1s)
	
    row = qb.IntRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first,sizetype, row, "S")
    gen_ioscript_footer(FILE2, label, "Packets", "viz2",max,min,sizetype) 

	#The I/O Flows data(1s)

	
    row = qb.IntRangeF(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row, "S")
    gen_ioscript_footer(FILE3, label, "Flows", "viz3",max,min,sizetype) 
   
	#The I/O Network,Packets, Flows (1s)
	
    row = qb.IntRangeAll(c, id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first,sizetype_array, row, "S")
    gen_ioascript_footer(FILE4, label, "viz4")
	
    FILE1.write(gen_footer())

    FILE2.write(gen_footer())

    FILE3.write(gen_footer())

    FILE4.write(gen_footer())

#######################################################################################
def graphInt1m(now, label, id, path):

    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1  month  single network graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label, the id of the network and th path where it is going to be written 
    qb = QueryBuilder()

    FILE1=open(pjoin(path,label+ "_1mnet.html"), "w")
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,label+ "_1mpak.html"), "w")
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,label+ "_1mflw.html"), "w")
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,label+ "_1mcpl.html"), "w")
    FILE4.write(gen_header())

    first=now-2419200
	
    sizetype_array=["bytes","bytes","bytes"]
    sizetype="bytes"
    # The I/O Network (1m)
	
    row = qb.IntRangeO(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row, "M")
    gen_ioscript_footer(FILE1, label, "Network", "viz1",max,min,sizetype) 
	


       # The I/O Packets (1m)
	
    row = qb.IntRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first, sizetype,row, "M")
    gen_ioscript_footer(FILE2, label, "Packets", "viz2",max,min,sizetype) 

	# The I/O Flows (1m)
	
    row = qb.IntRangeF(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row, "M")
    gen_ioscript_footer(FILE3, label, "Flows", "viz3",max,min,sizetype) 
	

	# The I/0 Network,Packets,Flows (1m), "M"
	
	
    row = qb.IntRangeAll(c, id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first,sizetype_array, row, "M")
    gen_ioascript_footer(FILE4, label, "viz4")
	#FILE.write(graph_content)
    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())
##################################################################################

def graphInt1a(now, label, id, path):

    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1  year  single network graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label, the id of the network and th path where it is going to be written 
    FILE1=open(pjoin(path,label+ "_1anet.html"), "w")
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,label+ "_1apak.html"), "w")
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,label+ "_1aflw.html"), "w")
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,label+ "_1acpl.html"), "w")
    FILE4.write(gen_header())
    
    first=now-29030400
    sizetype="bytes"
    sizetype_array=["bytes","bytes","bytes"]

	# The I/0 Network (1a)

    qb = QueryBuilder()

		
    row = qb.IntRangeO(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row, "A")
    gen_ioscript_footer(FILE1, label, "Network" , "viz1",max,min,sizetype) 
	
	# The I/0 Packets (1a)
	
	
    row = qb.IntRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first, sizetype,row, "A")
    gen_ioscript_footer(FILE2, label, "Packets" , "viz2",max,min,sizetype) 
	
	# The I/0 Flows (1a)
	
    row = qb.IntRangeF(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)	
    gen_iodata(FILE3, now, first, sizetype,row, "A")
    gen_ioscript_footer(FILE3, label, "Flows" , "viz3",max,min,sizetype) 

	# The Network,Packets,Flows (1a)
	
	
   	
    row = qb.IntRangeAll(c, id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first, sizetype_array,row, "A")
    gen_ioascript_footer(FILE4, label, "viz4")

    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())
################################## PORT GRAPHS ##################################################

##################################
##########NOTA: Verificar de no estar mandadno parametros de mas
##############################
def graphPort24h(now, nlabel, label, id, path):

    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 24 hour port  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label(label),  the name of the network the port belongs to (nlabel) the id of the port in the database  and th path where it is going to be written 
    qb = QueryBuilder()
    FILE1=open(pjoin(path,"%s-p%s_1dnet.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html 
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s-p%s_1dpak.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s-p%s_1dflw.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s-p%s_1dcpl.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE4.write(gen_header())
	#print(pjoin(path,"%s-p%s_1d.html") % (nlabel, label))
	
    first=now-86400

    sizetype="bytes"
    sizetype_array=["bytes","bytes","bytes"]
	################### The Port of Network (1d)############
	
    row = qb.PortRangeO(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
        #print sizetype, max, min
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row,"D")
    gen_ioscript_footer(FILE1, label, "Network", "viz1",max,min,sizetype) 


	##################  The Port  Packets (1d) ###############
	
	
    row = qb.PortRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first,sizetype, row,"D")
    gen_ioscript_footer(FILE2, label, "Packets", "viz2",max,min,sizetype) 

	################# The Port  Flows (1d) ##################

     	 
	
    row = qb.PortRangeF(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row,"D")
    gen_ioscript_footer(FILE3, label, "Flows", "viz3",max,min,sizetype) 

	############### The Port  of Network,Packets,Flows (1d) ######
     	 
	
    row = qb.PortRangeAll(c, id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first, sizetype_array,row,"D")
    gen_ioascript_footer(FILE4, label, "viz4")
#################

    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())
############################################################
def graphPort1s(now,nlabel, label, id, path):
	
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1 week  port  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label(label),  the name of the network the port belongs to (nlabel) the id of the port in the database  and th path where it is going to be written 
	
    qb = QueryBuilder()
    FILE1=open(pjoin(path,"%s-p%s_1wnet.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html 
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s-p%s_1wpak.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s-p%s_1wflw.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s-p%s_1wcpl.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE4.write(gen_header())
    first=now-604800

    sizetype_array=["bytes","bytes","bytes"]
    sizetype="bytes"
	#print(pjoin(path,"%s-p%s_1s.html") % (nlabel, label))
	
	######s############# The Port  of Network (1s)###############

	
	
    row = qb.PortRangeO(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row,"S")
    gen_ioscript_footer(FILE1, label, "Network", "viz1",max,min,sizetype) 
	##################  The Port  Packets (1s) ###############
	
	
    row = qb.PortRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first,sizetype, row,"S")
    gen_ioscript_footer(FILE2, label, "Packets", "viz2",max,min,sizetype) 

	################# The Port  Flows (1s) ##################

     	 
	
    row = qb.PortRangeF(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row,"S")
    gen_ioscript_footer(FILE3, label, "Flows", "viz3",max,min,sizetype) 
	############### The Port  of Network,Packets,Flows (1d) ######
     	 
	
    row = qb.PortRangeAll(c, id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first, sizetype_array,row,"S")
    gen_ioascript_footer(FILE4, label, "viz4")
################

    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())


def graphPort1m(now,nlabel, label, id, path):
	
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1 month port  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label(label),  the name of the network the port belongs to (nlabel) the id of the port in the database  and th path where it is going to be written 
    qb = QueryBuilder()
    FILE1=open(pjoin(path,"%s-p%s_1mnet.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html 
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s-p%s_1mpak.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s-p%s_1mflw.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s-p%s_1mcpl.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE4.write(gen_header())
        
    first=now-2419200
	
    sizetype_array=["bytes","bytes","bytes"]
    sizetype="bytes"
	#print(pjoin(path,"%s-p%s_1m.html") % (nlabel, label))
	
	################### The Port  of Network (1m)###############

	
	
    row = qb.PortRangeO(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row,"M")
    gen_ioscript_footer(FILE1, label, "Network", "viz1",max,min,sizetype) 

	##################  The Port  Packets (1m) ###############
	
	
    row = qb.PortRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first, sizetype,row,"M")
    gen_ioscript_footer(FILE2, label, "Packets", "viz2",max,min,sizetype) 

	################# The Port  Flows (1m) ##################

     	 
	
    row = qb.PortRangeF(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row,"M")
    gen_ioscript_footer(FILE3, label, "Flows", "viz3",max,min,sizetype) 

	############### The Port  of Network,Packets,Flows (1d) ######
     	 
	
    row = qb.PortRangeAll(c, id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first,sizetype_array, row,"M")
    gen_ioascript_footer(FILE4, label, "viz4")

##############
	
    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())


def graphPort1a(now,nlabel, label, id, path):

	
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1 year  port  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time, the title of the graph in label(label),  the name of the network the port belongs to (nlabel) the id of the port in the database  and th path where it is going to be written 
    qb = QueryBuilder()

    FILE1=open(pjoin(path,"%s-p%s_1anet.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html 
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s-p%s_1apak.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s-p%s_1aflw.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s-p%s_1acpl.html") % (nlabel, label), "w") # the name of the file is "name of network"-"port number"_1.d.html
    FILE4.write(gen_header())
	
	#print(pjoin(path,"%s-p%s_1a.html") % (nlabel, label))
    first=now-29030400
	
    sizetype_array=["bytes","bytes","bytes"]
    sizetype="bytes"

	   # The Port  Network (1a)

        
    row = qb.PortRangeO(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row, "A")
    gen_ioscript_footer(FILE1, label, "Network" , "viz1",max,min,sizetype) 

        # The Port Packets (1a)

        
    row = qb.PortRangeP(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first, sizetype,row, "A")
    gen_ioscript_footer(FILE2, label, "Packets" , "viz2",max,min,sizetype) 

        # The Port Flows (1a)
        
    row = qb.PortRangeF(c, id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row, "A")
    gen_ioscript_footer(FILE3, label, "Flows" , "viz3",max,min,sizetype) 

        # The Network,Packets,Flows (1a)

        
    row = qb.PortRangeAll(c, id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first, sizetype_array,row, "A")
    gen_ioascript_footer(FILE4, label, "viz4")
#######################################
    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())

        
##################### Point 2 Point graphs ############################

def graphP2P24h(now,nlabel, nn_id, to_label, path):

    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 24 hour Point to Point/Net 2 Net  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time (now), the name of the source network (nlabel), the id of that connection (nn_id) , the name of the destination network (to_label) and the path where it is going to be written 
	
    qb = QueryBuilder()
    FILE1=open(pjoin(path,"%s_%s_1dnet.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s_%s_1dpak.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s_%s_1dflw.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s_%s_1dcpl.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE4.write(gen_header())
        #print pjoin(path,"%s_%s_24h.html")%(nlabel, to_label)
		
    first=now-86400
    sizetype="bytes"
    sizetype_array=["bytes","bytes","bytes"]

	################ P2P  Network(1d)#################
		
        
    row = qb.ToNetRangeO(c, nn_id,now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row, "D")
    gen_ioscript_footer(FILE1, to_label, "Network","viz1",max,min,sizetype) 
	
	############  P2P Packets (1d) ###################

	 
       
    row = qb.ToNetRangeP(c, nn_id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first, sizetype,row, "D")
    gen_ioscript_footer(FILE2, to_label,"Packets", "viz2",max,min,sizetype) 

	############ P2P Flows (1d) ##################

	
        
    row = qb.ToNetRangeF(c, nn_id, now, first)
	

    sizetype,max,min=setsizetype(row,sizetype)
	
		
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row, "D")
    gen_ioscript_footer(FILE3, to_label,"Flows", "viz3",max,min,sizetype) 

	######### P2P Network,Packets,Flows (1d) ##########
	
	
        
    row = qb.ToNetRangeAll(c, nn_id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
	
    gen_ioadata(FILE4, now, first, sizetype_array,row, "D")
    gen_ioascript_footer(FILE4, to_label, "viz4")

##################
	
    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())

def graphP2P1s(now,nlabel, nn_id, to_label, path):

	
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1 week  Point to Point/Net 2 Net  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time (now), the name of the source network (nlabel), the id of that connection (nn_id) , the name of the destination network (to_label) and the path where it is going to be written 
    qb = QueryBuilder()


    FILE1=open(pjoin(path,"%s_%s_1wnet.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s_%s_1wpak.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s_%s_1wflw.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s_%s_1wcpl.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE4.write(gen_header())
	
	#print pjoin(path,"%s_%s_1s.html")%(nlabel, to_label)
    first=now-604800

    sizetype="bytes"
    sizetype_array=["bytes","bytes","bytes"]
	################ P2P  Network(1s)#################
		
        
    row = qb.ToNetRangeO(c, nn_id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row, "S")
    gen_ioscript_footer(FILE1, to_label, "Network","viz1",max,min,sizetype) 

	
	############  P2P Packets (1s) ###################

	 
        
    row = qb.ToNetRangeP(c, nn_id,now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first, sizetype,row, "S")
    gen_ioscript_footer(FILE2, to_label,"Packets", "viz2",max,min,sizetype) 

	############ P2P Flows (1s) ##################

	
        
    row = qb.ToNetRangeF(c, nn_id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row, "S")
    gen_ioscript_footer(FILE3, to_label,"Flows", "viz3",max,min,sizetype) 

	######### P2P Network,Packets,Flows (1s) ##########
	
	
        
    row = qb.ToNetRangeAll(c, nn_id, now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first, sizetype_array,row, "S")
    gen_ioascript_footer(FILE4, to_label, "viz4")   

##################

    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())

                   

def graphP2P1m(now,nlabel, nn_id, to_label, path):

	
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1 month  Point to Point/Net 2 Net  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time (now), the name of the source network (nlabel), the id of that connection (nn_id) , the name of the destination network (to_label) and the path where it is going to be written 
    qb = QueryBuilder()

    FILE1=open(pjoin(path,"%s_%s_1mnet.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s_%s_1mpak.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s_%s_1mflw.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s_%s_1mcpl.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE4.write(gen_header())
	
	#print pjoin(path,"%s_%s_1m.html")%(nlabel, to_label)
    first=now-2419200
	
    sizetype="bytes"
    sizetype_array=["bytes","bytes","bytes"]

	################ P2P  Network(1m)#################
		
        
    row = qb.ToNetRangeO(c, nn_id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first, sizetype,row, "M")
    gen_ioscript_footer(FILE1, to_label ,"Network","viz1",max,min,sizetype) 

	
	############  P2P Packets (1m) ###################

	 
        
    row = qb.ToNetRangeP(c, nn_id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first, sizetype,row, "M")
    gen_ioscript_footer(FILE2, to_label,"Packets", "viz2",max,min,sizetype) 
	############ P2P Flows (1M) ##################

	
        
    row = qb.ToNetRangeF(c, nn_id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row, "M")
    gen_ioscript_footer(FILE3, to_label,"Flows", "viz3",max,min,sizetype) 

	######### P2P Network,Packets,Flows (1M) ##########
	
	
        
    row = qb.ToNetRangeAll(c, nn_id,now, first)
    sizetype_array=setsizetype_all(row,sizetype_array)
    gen_ioascript_header(FILE4,sizetype_array)
    gen_ioadata(FILE4, now, first, sizetype_array,row, "M")
    gen_ioascript_footer(FILE4, to_label, "viz4")

##################

    FILE1.write(gen_footer())
    FILE2.write(gen_footer())
    FILE3.write(gen_footer())
    FILE4.write(gen_footer())

def graphP2P1a(now,nlabel, nn_id, to_label, path):

	
    # This function (called from flowsgrapher.py , is responsible from generating the graph file for the 1 year to Point/Net 2 Net  graphs that contain the octect,packets,flows and "all" graphs, 
        # This function receives , the current unix time (now), the name of the source network (nlabel), the id of that connection (nn_id) , the name of the destination network (to_label) and the path where it is going to be written 
    qb = QueryBuilder()

    FILE1=open(pjoin(path,"%s_%s_1anet.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE1.write(gen_header())
    FILE2=open(pjoin(path,"%s_%s_1apak.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE2.write(gen_header())
    FILE3=open(pjoin(path,"%s_%s_1aflw.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE3.write(gen_header())
    FILE4=open(pjoin(path,"%s_%s_1acpl.html")%(nlabel, to_label), "w") #The file will be named "source"_"destination"_1d.html
    FILE4.write(gen_header())

	
	#print pjoin(path,"%s_%s_1a.html")%(nlabel, to_label)
    first=now-29030400
	
    sizetype="bytes"
    sizetype_array=["bytes","bytes","bytes"]

	################ P2P  Network(1a)#################
		
        
    row = qb.ToNetRangeO(c, nn_id,now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE1,sizetype)
    gen_iodata(FILE1, now, first,sizetype, row, "A")
    gen_ioscript_footer(FILE1, to_label ,"Network","viz1",max,min,sizetype) 

	
	############  P2P Packets(1a) ###################

	 
        
    row = qb.ToNetRangeP(c, nn_id, now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE2,sizetype)
    gen_iodata(FILE2, now, first,sizetype, row, "A")
    gen_ioscript_footer(FILE2, to_label,"Packets", "viz2",max,min,sizetype) 

	############ P2P Flows (1a) ##################

	
        
    row = qb.ToNetRangeF(c, nn_id,now, first)
    sizetype,max,min=setsizetype(row,sizetype)
    gen_ioscript_header(FILE3,sizetype)
    gen_iodata(FILE3, now, first, sizetype,row, "A")
    gen_ioscript_footer(FILE3, to_label,"Flows", "viz3",max,min,sizetype) 

	######### P2P Network,Packets,Flows (1a) ##########
	
	
        
    row = qb.ToNetRangeAll(c, nn_id, now, first)
	
    if row:

        sizetype_array=setsizetype_all(row,sizetype_array)
        gen_ioascript_header(FILE4,sizetype_array)
        gen_ioadata(FILE4, now, first, sizetype_array,row, "A")
        gen_ioascript_footer(FILE4, to_label, "viz4")



        FILE1.write(gen_footer())
        FILE2.write(gen_footer())
        FILE3.write(gen_footer())
        FILE4.write(gen_footer())


#c.close() cursor closed in flowsqueries2.py but for some reason in here there is an error

###################################################################################################### THE END ####################################################################################
