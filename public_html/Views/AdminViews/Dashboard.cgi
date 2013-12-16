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
from SessionModel import SessionModel
from NetworkModel import NetworkModel
from ViewModel import ViewModel
from UserModel import UserModel

cgitb.enable()

########## Imports #######################

############### Init #######################

print "Content-Type: text/html"

print

form = cgi.FieldStorage()#getting the values of the form in case of a validation error

uid = form.getvalue("uid")

uid = str(uid).strip("(),L")

uid = int(uid)

sid = form.getvalue("sid")

remote = form.getvalue("remote")

now = datetime.datetime.now()#generate the TimeStamp

tmstp = now.minute#converting the TimeStamp to string   

SessionModel = SessionModel()

NetworkModel = NetworkModel()

ViewModel = ViewModel()

UserModel = UserModel()

timestamp = SessionModel.Validate(uid, sid, remote)

##################### Init ##########################################

if((timestamp+5)<=tmstp or timestamp == -1):

    SessionModel.Close(uid, remote)

    del NetworkModel

    del UserModel

    del SessionModel

    print """<script language=\"JavaScript\">{location.href=\"../../index.cgi\";self.focus();}</script>"""


SessionModel.UpdateTimeStamp(tmstp, uid, remote)

print """        
	
		<head>

        	<title>TOA Network Monitoring System</title>

            <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'></script>

            <link rel='stylesheet' type='text/css' href='../../Style/Style.css'>

        	<script type='text/javascript' src='../../Style/Style.js'></script>

            <script type='text/javascript' src='../../Controllers/MenuController.js'></script>

            <script type='text/javascript' src='../../Controllers/GraphController.js'></script>

            <div class=banner>

            	<p>TOA Network Monitoring System</p>

                <div id='user_box'>
                        <p>"""

print UserModel.GetUsername(uid)[0]

print  """<br>

                    <a href='Home.cgi?uid=%s&sid=%s&remote=%s'>Home</a>&nbsp;

                    <a href='Dashboard.cgi?uid=%s&sid=%s&remote=%s'>Dashboard</a>&nbsp;

                    <a href='Setting.cgi?uid=%s&sid=%s&remote=%s'>Settings</a>

                    </p>

            </div>
			
			</div>                                                                                                                                                                                                                                                                       
		
		</head>

		<body>

            <div class=menu>

            	<div id='top_menu_button' onclick='GetNetworksMenu(1)'>

            		<br><br><br><br><br><br><p>Networks</p>

            	</div>

            	<div id='bottom_menu_button' onclick='GetFirstSystemMenu(1)'>

            		<br><br><br><br><br><p>System</p>

            	</div>

            	<div id='menu_content'>

            	</div>

            	<div id='port_net_menu_container'>

            	</div>

            </div>

            <div class='content' id='content'>"""%(uid, sid, remote, uid, sid, remote, uid, sid, remote)

labels = NetworkModel.GetLabels()

count = NetworkModel.GetNumberOfLabels()

print "<div id='NetworkList'><br><div id='NetworkListTitle'><h1>Device List</h1></div><a href='AddNetwork.cgi?uid=%s&sid=%s&remote=%s'><div id='AddNetworkButton'><p>+</p></div></a>"%(uid,sid,remote)

i = 0# initialize the loop counter to 0

while(i<count):#while the loop counter is less than the number of labels....do this

    ids = NetworkModel.GetIdByLabel(labels[i][0])

    print """<div id='NetworkEntry'><br><h3>%s</h3><br><br>"""%(labels[i][0])

    print """<center><a href='EditNetwork.cgi?uid=%s&sid=%s&remote=%s&nid=%s'><div id='EntryButton'>Edit</div></a><a href='../../Controllers/RemoveNetwork.cgi?uid=%s&sid=%s&remote=%s&nid=%s'><div id='EntryButton'>Remove</div></a></center><br><br></div>"""%(uid, sid, remote, ids, uid, sid, remote, ids)
    
    i += 1 # increment the loop counter

del NetworkModel

del UserModel

del SessionModel

print "<br></div>"

print "<center><div id='ViewList'><br>"

print "<div id='NetworkListTitle'><h1>View List</h1></div>"

print "<a href='AddView.cgi?uid=%s&sid=%s&remote=%s'><div id='AddNetworkButton'><p>+</p></div></a>"%(uid,sid,remote)

views = ViewModel.GetAll(uid)

if views:

    for v in views:

        print """<div id='NetworkEntry'><br><h3>%s</h3><br><br>"""%(v[1])

        print """<center><a href='EditView.cgi?uid=%s&sid=%s&remote=%s&vid=%s'><div id='EntryButton'>Edit</div></a><a href='../../Controllers/RemoveView.cgi?uid=%s&sid=%s&remote=%s&vid=%s'><div id='EntryButton'>Remove</div></a></center><br><br></div>"""%(uid, sid, remote, v[0], uid, sid, remote, v[0])


del ViewModel

print "<br></div></div></body>"
