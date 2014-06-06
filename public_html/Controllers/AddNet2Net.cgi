#!/usr/bin/python

########### Imports #######################

import cgi
import sys 
import os
import cgitb
import datetime
import urllib, hashlib
import sys
sys.path.append("../Models")
from SessionModel import SessionModel
from Net2NetModel import Net2NetModel
from UserModel import UserModel

cgitb.enable()

########## Imports #######################

############### Init #######################

print "Content-Type: text/html\n\n"

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

device = form.getvalue("Device")

now = datetime.datetime.now()#generate the TimeStamp

tmstp = now.minute#converting the TimeStamp to string   

SessionModel = SessionModel()

UserModel = UserModel()

Net2NetModel = Net2NetModel()

timestamp = SessionModel.Validate(uid, sid, remote)

if((timestamp+5)<=tmstp or timestamp == -1):

    SessionModel.Close(uid, remote)

    del Net2NetModel

    del UserModel

    del SessionModel

    print """<script language=\"JavaScript\">{location.href=\"../index.cgi\";self.focus();}</script>"""

SessionModel.UpdateTimeStamp(tmstp, uid, remote)

Net2NetModel.Add(nid, device)

del Net2NetModel

del UserModel

del SessionModel

print """<script language=\"JavaScript\">{location.href=\"../Views/AdminViews/ManageNet2Net.cgi?nid=%s&uid=%s&sid=%s&remote=%s\";self.focus();}</script>"""%(nid, uid, sid, remote)