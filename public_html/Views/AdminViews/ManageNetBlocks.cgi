#!/usr/bin/python

########### Imports #######################

import cgi
import sys 
import os
import socket
import cgitb
import datetime
import urllib, hashlib
import sys
sys.path.append("../../Models")
from SessionModel import SessionModel
from NetworkModel import NetworkModel
from UserModel import UserModel
from NetBlockModel import NetBlockModel
sys.path.append("../../Controllers")
from FormController import *
import cgitb

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

nid = form.getvalue("nid")

nid = str(nid).strip("(),L")

nid = int(nid)

now = datetime.datetime.now()#generate the TimeStamp

tmstp = now.minute#converting the TimeStamp to string   

SessionModel = SessionModel()

NetworkModel = NetworkModel()

NetBlockModel = NetBlockModel()

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

print  """  <br>

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

print """<center><ul><li><a href="EditNetwork.cgi?uid=%s&sid=%s&remote=%s&nid=%s"><div id="mDevs"><p>Device</p></div></a></li><li><a href="ManagePorts.cgi?uid=%s&sid=%s&remote=%s&nid=%s"><div id="mPorts"><p>Ports</p></div></a></li><li><a href="ManageNet2Net.cgi?uid=%s&sid=%s&remote=%s&nid=%s"><div id="mNets"><p>Net2Net</p></div></a></li><li><a href="ManageNetBlocks.cgi?uid=%s&sid=%s&remote=%s&nid=%s"><div id="mBlocks"><p>NetBlocks</p></div></a></li></ul></center>"""%(uid, sid, remote, nid, uid, sid, remote, nid, uid, sid, remote, nid, uid, sid, remote, nid)

Device = NetworkModel.Get(nid)

AddNetBlockForm(nid, uid, sid, remote)

NB = NetBlockModel.GetAll(nid)

print "<table>"

count = 0

for n in NB:

    if count == 0:

        print "<tr>"


    elif count%2 == 0 and count != 0 and count != len(NB)-1:

        print "</tr><tr><td>&nbsp;</td><tr>"

    print "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><div id=PNBTitle>From %s to %s </div><td>&nbsp;</td><td><a href='../../Controllers/RemoveNetBlock.cgi?nid=%s&uid=%s&sid=%s&remote=%s&netblock=%s'><div id=PNButton>Remove</div></a></td><td>&nbsp;&nbsp;&nbsp;</td>"%(socket.inet_ntoa(hex(int(n[1]))[2:].zfill(8).decode('hex')), socket.inet_ntoa(hex(int(n[2]))[2:].zfill(8).decode('hex')), nid, uid, sid, remote, n[0])

    if count == len(NB)-1:

        print "</tr>"

    count += 1

del NetworkModel

del UserModel

del SessionModel

print "</table><br><br><br></div></center><br></div></center></div></body>"