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
from PortModel import PortModel
from Net2NetModel import Net2NetModel
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

UserModel = UserModel()

NetworkModel = NetworkModel()

PortModel = PortModel()

Net2NetModel = Net2NetModel()

ViewModel = ViewModel()

if SessionModel.connect() and UserModel.connect() and Net2NetModel.connect() and ViewModel.connect() and PortModel.connect() and NetworkModel.connect():

    timestamp = SessionModel.Validate(uid, sid, remote)

    ##################### Init ##########################################

    #################### Validation ####################################

    if((timestamp+5)<=tmstp or timestamp == -1):

        SessionModel.Close(uid, remote)

        del UserModel

        del SessionModel

        del NetworkModel

        del PortModel

        del Net2NetModel

        del ViewModel

        print """<script language=\"JavaScript\">{location.href=\"../../index.cgi\";self.focus();}</script>"""


    #################### Validation ####################################

    ######################### headers  #########################

    print "<!DOCTYPE html><html>"

    print "<head>"

    print "<title>ToaNMS</title>"

    print """<link rel="stylesheet" href="../../Style/bootstrap/css/style.css"/>"""

    print """<link rel="stylesheet" href="../../Style/bootstrap/css/datepicker.css"/>"""

    print """<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>"""

    print """<script src="../../Style/bootstrap/js/bootstrap.min.js"></script>"""

    print """<script src="../../Style/bootstrap/js/helpers.js"></script>"""

    print """<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.js' type='text/javascript'></script>"""

    print """<script type='text/javascript' src='../../Style/bootstrap/js/jquery.ui.datetimepicker.min.js'></script>"""

    print """<script src="../../Controllers/GraphController.js"></script>"""

    print """<script src="../../Controllers/MenuController.js"></script>"""

    print "</head>"

    ######################### headers #########################

    SessionModel.UpdateTimeStamp(tmstp, uid, remote)

    print "<body>"

    ######################### banner  #########################

    print "<div class='row'>"

    print "<div class='col-md-9'>"
            
    print """<h1 class='brand'>Toa Network Monitoring System</h1>"""

    print "</div>"

    print "<div class='col-md-3'>"
        
    print "<div class='row'>"

    print "<div class='col-md-12 box-user'><h3><center>"

    print UserModel.Email(uid)[0]

    print "</center></h3></div>"

    print "</div>"

    print "<div class='row'>"

    print "<div class='col-md-12'><center><div class='btn-group'>"

    print "<a class='btn btn-default btn-box' href='Dashboard.cgi?uid=%s&sid=%s&remote=%s'>Dashboard</a>"%(uid, sid, remote)

    print "<div class='btn-group'><a class='btn btn-default btn-box' href='#' data-toggle='dropdown'>Settings</a>"

    print "<ul class='dropdown-menu' role='menu' id='setting-menu'>"
      
    print "<li><a tabindex='-1' href='#'>Reset Password</a></li>"

    print "<li><a tabindex='-1' href='#'>Add Account</a></li>"

    print "<li><a tabindex='-1' href='../../Controllers/Logout.cgi?uid=%s&sid=%s&remote=%s'>Logout</a></li>"%(uid, sid, remote)

    print "</ul></div>"

    print "</div></center></div>"

    print "</div>"

    print "</div>"

    print "</div>"

    ######################### banner  #########################

    ######################### viewer  #########################

    print """<div class="modal hide fade" id="viewer-modal">"""

    print """<div class="modal-header" id='viewer-header'>"""

    print "</div>"

    print """<div class="modal-body" id="viewer-body">"""

    print "</div>"

    print "</div>"

    ######################### viewer  #########################

    ######################### add view form  #########################

    print """<div class="modal hide fade" id="addview-form-modal">"""

    print """<div class="modal-header">"""

    print """<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>"""

    print """<center><h2>Add View</h2></center>"""

    print "</div>"

    print """<div class="modal-body">"""

    print "<center><br><form action='../../Controllers/AddView.cgi' method='post' name='add-view-form'>"

    print "<input class='input-xlarge' type='text' name='view-name' value='' placeholder='Write the View Name'/>"

    print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

    print "<input type='hidden' name='sid' value='%s'/>"%(sid)

    print "<input type='hidden' name='remote' value='%s'/>"%(remote) 

    print "</form></center>"

    print "</div>"

    print """<div class="modal-footer">"""

    print """<input class="btn btn-large btn-inverse" id="addview-button" onclick='AddView()' type="submit" value="Add">"""

    print "</center>"

    print "</div>"

    print "</div>"

    ######################### add view form  #########################

    ######################### custom query form  #########################

    print """<div class="modal hide fade" id="cquery-form-modal">"""

    print """<div class="modal-header">"""

    print """<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>"""

    print """<center><h2>Custom Query System</h2></center>"""

    print "</div>"

    print """<div class="modal-body" id="custom-query-body">"""

    print "<select name='network' id='network' onchange='GetSecondSystemMenu(this[this.selectedIndex].value, 1), ClearThirdSystemMenu()'>"

    devices = NetworkModel.GetAll()

    print "<option value='None'>Select Device</option>"

    for device in devices:

        print "<option value='%s'>%s</option>"%(device[0], device[1])

    print "</select>"

    print "<div id='custom-query-second'>"

    print "</div>"

    print "<div id='custom-query-third'>"

    print "</div>"

    print "<div id='custom-query-time'>"

    print "</div>"

    print "</div>"

    print """<div class="modal-footer">"""

    print """<input class="btn btn-large btn-inverse" id="query-button" type="submit" value="Query" onclick='Search(this)'>"""

    print "</center>"

    print "</div>"

    print "</div>"

    ######################### custom query form  #########################

    ######################### feature bar #########################

    print "<div class='row feature-bar'>"

    print "<div class='col-md-11 col-md-offset-1'>"

    print "<div class='btn-group feature-bar-group'>"

    print "<a href='Home.cgi?uid=%s&sid=%s&remote=%s' class='btn btn-default btn-lg btn-feature-bar'>Home</a>"%(uid, sid, remote)

    print "<div class='btn-group'>"

    print """<a href='#DeviceMenu' data-toggle='dropdown' class='btn btn-default btn-lg btn-feature-bar'>Device</a>"""        

    print "<ul class='dropdown-menu' role='menu'>"

    devices = NetworkModel.GetAll()

    for device in devices:

        print "<li class='dropdown-submenu parent'><a href=#Device class='dropdown-hover'>%s</a><ul class='dropdown-menu' id='TripleOptionMenu'><li><a href='#%sInterfaceGraph' onclick=\"GetGraphsView(%s, %s, '%s', '%s')\">Interface Graph</a></li><li><a href='#%sPortGraph' onclick=\"GetGraphsView(%s)\">Port Graph<br><select id='PortSelection' onchange='GetPortGraphsView(this.options[this.selectedIndex].value, %s)'>"%(device[1], device[1], device[0], uid, sid, remote, device[0], device[1], device[0])

        ports = PortModel.Get(device[0])

        print "<option value='None'>Select</option>"

        for port in ports:

            print "<option value='%s'>%s</option>"%(port[1], port[1])

        print "</select></a></li><li><a href='#%sNet2NetGraph'>Net2Net Graph<br><select id='N2NSelection' onchange='GetNet2NetGraphsView(this.options[this.selectedIndex].value, %s)'>"%(device[1], device[0])

        net2nets = Net2NetModel.Get(device[0])

        print "<option value='None'>Select</option>"

        for net2net in net2nets:

           print "<option value='%s'>%s</option>"%(net2net[2], net2net[1])

        print "</select></a></li></ul></li>"

    print "</ul>"

    print "</div>"

    print "<a class='btn btn-default btn-lg btn-feature-bar' id='query-button' href='#cquery-form-modal' data-toggle='modal'>Custom Query System</a>"

    print "<div class='btn-group'>"

    print "<a class='btn btn-default btn-lg btn-feature-bar' data-toggle='dropdown' id='viewer-button' href='#Viewer'>Viewer</a>"

    print "<ul class='dropdown-menu' role='menu'>"

    views = ViewModel.GetAll(uid)

    for view in views:

        print "<li><a href=#viewer-modal onclick=\"GetViewGraph(%s, '%s')\" data-toggle='modal'>%s</a></li>"%(view[0], view[1], view[1])

    print "</ul></div>"

    print "</div></div>"

    print "</div>"

    ######################### feature bar #########################

    ######################### content  #########################

    print "<div class='container-fluid' id='content'>"

    print "<div class='row'>"

    print "<div class='col-md-4 col-md-offset-1 device-col'>"

    labels = NetworkModel.GetLabels()

    count = NetworkModel.GetNumberOfLabels()

    print "<h2 class='device-col-header page-header'>Device List <a class='pull-right device-col-button' href='AddNetwork.cgi?uid=%s&sid=%s&remote=%s'><i class='glyphicon glyphicon-plus'></i></a></h2>"%(uid,sid,remote)

    i = 0# initialize the loop counter to 0

    while(i<count):#while the loop counter is less than the number of labels....do this

        ids = NetworkModel.GetIdByLabel(labels[i][0])

        print "<div class='thumbnail'>"

        print "<h3 class='device-col-entry'>%s"%(labels[i][0])

        print "<a class='pull-right text-danger device-col-remove-button' href='../../Controllers/RemoveNetwork.cgi?uid=%s&sid=%s&remote=%s&nid=%s'><i class='glyphicon glyphicon-trash'></i></a>"""%(uid, sid, remote, ids)

        print "<a class='pull-right text-warning device-col-edit-button' href='EditNetwork.cgi?uid=%s&sid=%s&remote=%s&nid=%s'><i class='glyphicon glyphicon-pencil'></i></a></h3></div>"%(uid, sid, remote, ids)
        
        i += 1 # increment the loop counter

    print "</div>"

    print "<div class='col-md-4 col-md-offset-1 view-col'>"

    print "<h2 class='view-col-header page-header'>View List <a class='pull-right view-col-button' href=#addview-form-modal data-toggle='modal'><i class='glyphicon glyphicon-plus'></i></a></h2>"

    views = ViewModel.GetAll(uid)

    if views:

        for v in views:

            print "<div class='thumbnail'>"

            print "<h3 class='view-col-entry'>%s "%(v[1])

            print "<a class='pull-right text-danger view-col-remove-button' href='../../Controllers/RemoveView.cgi?uid=%s&sid=%s&remote=%s&vid=%s'><i class='glyphicon glyphicon-trash'></i></a>"%(uid, sid, remote, v[0])

            print "<a class='pull-right text-warning view-col-edit-button' href='EditView.cgi?uid=%s&sid=%s&remote=%s&vid=%s'><i class='glyphicon glyphicon-pencil'></i></a></h3>"%(uid, sid, remote, v[0])

            print "</div>"

    print "</div>"

    print "</div>"

    print "</div>"

    print "</div>"

    ######################### content  #########################

    ######################### Fatality #########################

    print "</body>"

    print "</html>"

else:

    print "Database Connection Error. Configuration File Not Found."

    print SessionModel.connect() and UserModel.connect() and Net2NetModel.connect() and ViewModel.connect() #and PortModel.connect() and NetworkModel.connect()

del UserModel

del SessionModel

del NetworkModel

del PortModel

del Net2NetModel

del ViewModel

######################### Fatality #########################
