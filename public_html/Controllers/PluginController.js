function getApp(flowDate,uid,sid,remote){
	
	var selection = document.getElementById('APP_FILTER').value;

	var url = '';
	
	if (selection == 'cube')

		url = "http://flows.hpcf.upr.edu/plugins/c/?fromtoa="+flowDate+"&PARSE=0&uid="+uid+"&sid="+sid+"&remote="+remote;
	else if (selection == "graph")

		url = "http://flows.hpcf.upr.edu/plugins/g/?fromtoa="+flowDate+"&PARSE=0&uid="+uid+"&sid="+sid+"&remote="+remote;

	else return ;

	window.open(url,"_blank");

}
