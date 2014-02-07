def AddNetworkForm(uid, sid, remote):

	print "<center><div id='Forms'>"

	print "<form action='../../Controllers/AddNetwork.cgi' method='post'>"

	print "<table cellspacing='20'><tr>"

	print "<td><input type='text' name='Label' value='' placeholder='Network Label'/></td>"

	print "<td><select name='Type'><option value='interface'>Interface</optiom>"

	print "<option value='as'>As</option><option value='network'>Network</option></select></td>"

	print "</tr><tr>"

	print "<td><input type='text' name='InterfaceId' value='' placeholder='Interface Id'/></td>"

	print "<td><input type='text' name='ASNumber' value='' placeholder='AS Number'/></td>"

	print "</tr><tr>"

	print "<td><input type='text' name='MinBytes' value='' placeholder='Min Bytes Size'/></td>"

	print "<td><input type='text' name='MaxBytes' value='' placeholder='Max Bytes Size'/></td>"

	print "</tr><tr>"

	print "<td>&nbsp;</td><td><button>Add Network</button></td>"

	print "</tr></table>"

	print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	print "<input type='hidden' name='sid' value='%s'/>"%(sid)

	print "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	print "</form></div></center>"


def EditNetworkForm(nid, device, uid, sid, remote):

	print "<form action='../../Controllers/SaveNetwork.cgi' method='post'>"

	print "<table class='table' id='edit-net-table'><center><tr>"

	print "<td><h4>Network Label</h4><input type='text' name='Label' value='%s' placeholder='Network Label'/></td>"%(device[0])

	print "<td><h4>Type of Monitoring</h4><select name='Type'>"

	if device[3] == "interface":

		print "<option value='interface' selected='selected'>Interface</option>"

	else:

		print "<option value='interface'>Interface</option>"

	if device[3] == "as":

		print "<option value='as' selected='selected'>As</option>"

	else:

		print "<option value='as'>As</option>"

	if device[3] == "network":

		print "<option value='network' selected='selected'>Network</option></select></td>"

	else:

		print "<option value='network'>Network</option></select></td>"

	print "</tr><tr>"

	print "<td><h4>Interface Number</h4><input type='text' name='InterfaceId' value='%s' placeholder='Interface Id'/></td>"%(device[1])

	print "<td><h4>AS Number</h4><input type='text' name='ASNumber' value='%s' placeholder='AS Number'/></td>"%(device[2])

	print "</tr><tr>"

	print "<td><h4>Min Bytes Threshold</h4><input type='text' name='MinBytes' value='%s' placeholder='Min Bytes Size'/></td>"%(device[4])

	print "<td><h4>Max Bytes Threshold</h4><input type='text' name='MaxBytes' value='%s' placeholder='Max Bytes Size'/></td>"%(device[5])

	print "</tr><tr>"

	print "</tr></center></table>"

	print "<input type='hidden' name='nid' value='%s'/>"%(nid) 

	print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	print "<input type='hidden' name='sid' value='%s'/>"%(sid)

	print "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	print "<button class='btn btn-large btn-inverse' id='save-network-button'>Save Network</button>"

	print "</form>"


def AddPortsForm(nid, uid, sid, remote):

	print "<center><div id='Forms'><form action='../../Controllers/AddPort.cgi' method='post'>"

	print "<input type='text' name='Port' value='' placeholder='Port Number'/> <button class='btn btn-inverse' id='add-port-button'>Add Port</button>"

	print "<input type='hidden' name='nid' value='%s'/>"%(nid) 

	print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	print "<input type='hidden' name='sid' value='%s'/>"%(sid)

	print "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	print "</form><br>"

def AddNet2NetForm(nid, uid, sid, remote, devices):

	print "<center><form action='../../Controllers/AddNet2Net.cgi' method='post'>"

	print "<select name='Device'>"

	for d in devices:

		print "<option value='%s'>%s</option>"%(d[0], d[1])

	print "</select>"

	print "<button class='btn btn-inverse' id='add-n2n-button'>Add Net2Net</button></td>"

	print "<input type='hidden' name='nid' value='%s'/>"%(nid) 

	print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	print "<input type='hidden' name='sid' value='%s'/>"%(sid)

	print "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	print "</form><br>"

def AddNetBlockForm(nid, uid, sid, remote):

	print "<center><form action='../../Controllers/AddBlock.cgi' method='post'>"

	print "<input type='text' name='FIP' value='' placeholder='From (IP Address)'/> <input type='text' name='TIP' value='' placeholder='To (IP Address)'/> <button class='btn btn-inverse' id='add-netblock-button'>Add NetBlock</button>"

	print "<input type='hidden' name='nid' value='%s'/>"%(nid) 

	print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	print "<input type='hidden' name='sid' value='%s'/>"%(sid)

	print "<input type='hidden' name='remote' value='%s'/>"%(remote) 

	print "</form><br>"


def AddViewForm(uid, sid, remote, graphs):

	print "<center><div id='Forms'><form action='../../Controllers/AddView.cgi' method='post'>"

	print "<table>"

	print "<tr><td><input type='text' name='ViewName' value='' placeholder='View Name'/></td><td>&nbsp;</td>"

	print "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"

	print "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"

	print "<td><select name='Graph' id='Graph'>"

	for g in graphs:

		print "<option value='%s'>%s</option>"%(g[0], g[1])

	print "</select></td>"

	print "<td><div id='AddGraphButton' onclick='AddGraph()'>Add Graph</div></td>"

	print "</tr>"

	print "</table>"

	print "<table id='graphs_preview'></table>"

	print "<input type='hidden' id='graph_ids' name='graphs' value=''/>"

	print "<input type='hidden' id='gnumber' name='gnumber' value='0'/>" 

	print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	print "<input type='hidden' name='sid' value='%s'/>"%(sid)

	print "<input type='hidden' name='remote' value='%s'/>"%(remote)

	print "<button id='SaveViewButton'>Save</button>"
	
	print "</form>"


def EditViewForm(uid, sid, remote, graphs, ViewName, view_graphs, gnum):

	print "<center><div id='Forms'><form action='../../Controllers/EditView.cgi' method='post'>"

	print "<table>"

	print "<tr><td><input type='text' name='ViewName' value='%s' placeholder='View Name'/></td><td>&nbsp;</td>"%(ViewName)

	print "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"

	print "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"

	print "<td><select name='Graph' id='Graph'>"

	for g in graphs:

		print "<option value='%s'>%s</option>"%(g[0], g[1])

	print "</select></td>"

	print "<td><div id='AddGraphButton' onclick='AddGraph()'>Add Graph</div></td>"

	print "</tr>"

	print "</table>"

	print "<table id='graphs_preview'></table>"

	print "<input type='hidden' id='graph_ids' name='graphs' value='%s'/>"%(view_graphs)

	print "<input type='hidden' id='gnumber' name='gnumber' value='%s'/>"%gnum 

	print "<input type='hidden' name='uid' value='%s'/>"%(uid) 

	print "<input type='hidden' name='sid' value='%s'/>"%(sid)

	print "<input type='hidden' name='remote' value='%s'/>"%(remote)

	print "<button id='SaveViewButton'>Save</button>"
	
	print "</form>"



