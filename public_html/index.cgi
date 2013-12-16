#!/usr/bin/python
########### Imports #######################

import cgi
import sys 
import os
import cgitb
from datetime import datetime

########## Imports #######################

############### Init #######################

print "Content-Type: text/html\n\n"

agent = os.environ.get("HTTP_USER_AGENT", "N/A")

form = cgi.FieldStorage()#getting the values of the form in case of a validation error

if form.has_key("validation"):

    validation = int(form.getvalue("validation"))

else:

    validation = None

if form.has_key("iframe_display"):
        
	iframe_display = form.getvalue("iframe_display")

else:

    iframe_display = "p2p"

##################### Init ##########################################

print """        
	
		<head>

        	<title>TOA Network Monitoring System</title>

            <link rel='stylesheet' type='text/css' href='Style/Style.css'>

            <script type='text/javascript' src='Controllers/MenuController.js'></script>

            <script type='text/javascript' src='Controllers/GraphController.js'></script>

            <script type='text/javascript' src='Style/jquery.min.js'></script>

            <script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.js' type='text/javascript'></script>
    
            <script type='text/javascript' src='Style/jquery.ui.datetimepicker.min.js'></script>
    
            <script type='text/javascript' src='Style/Style.js'></script>

            <link rel='stylesheet' type='text/css' href='Style/jquery-ui.css'/>

        </head>"""

print """<div class=banner><p>TOA Network Monitoring System</p>"""

if agent.find("Mobile") == -1:

    print """
                                                      
                <form action='Controllers/AuthenticationController.cgi' method='post'>

                    <input id=username type='text' name='username' value='' placeholder='Username'>

                    <input id=password type='password' name='password' value='' placeholder='Password'>

                    <input id='login_button' type='submit' name='button' value='Login'>"""

    if validation <= 1 and validation != None:

        print """<label>Invalid Username or Password.</label>"""


    print	"""</form>"""
			
print """</div>                                                                                                                                                                                                                                                                       
	
		<body>

            <div class=menu>

            	<div id='top_menu_button' onclick='GetNetworksMenu()'>

            		<br><br><br><br><br><br><p>Networks</p>

            	</div>

            	<div id='bottom_menu_button' onclick='GetFirstSystemMenu()'>

            		<br><br><br><br><br><p>System</p>

            	</div>

            	<div id='menu_content'>


            	</div>

            	<div id='port_net_menu_container'>

            	</div>

            </div>

            <div class='content' id='content'>"""

if (iframe_display=="p2p"):
       
	print """<center><iframe class=infovis src='../../../../graphs/p2p_graph.html' frameborder='0' scrolling='no'></iframe></center>"""	

print "</div></body>"