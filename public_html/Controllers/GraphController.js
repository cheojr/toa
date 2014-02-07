function GetGraphsView(id, uid, sid, remote){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = "<center>"+xmlhttp.responseText+"</center>";
                
        }
                                                                                                                                                                                  
    }

    //alert("http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/DeviceGraphView.cgi?id="+id+"&uid="+uid+"&sid="+sid+"&remote="+remote,true);

    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/DeviceGraphView.cgi?id="+id+"&uid="+uid+"&sid="+sid+"&remote="+remote,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetGraphsViewBy(id, value){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = "<center>"+xmlhttp.responseText+"</center";
                
        }
                                                                                                                                                                                  
    }

    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/DeviceGraphViewsBy"+value+".cgi?id="+id,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetPortGraphsView(sel, id){

    var text = sel;

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = "<center>"+xmlhttp.responseText+"</center>";
                
        }
                                                                                                                                                                                  
    }
        
    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/PortGraphView.cgi?id="+id+"&port="+text,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}

function GetPortGraphsViewBy(id, pid, value){

        var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = "<center>"+xmlhttp.responseText+"</center>";
                
        }
                                                                                                                                                                                  
    }

    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/PortGraphViewBy"+value+".cgi?id="+id+"&port="+pid,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}


function GetNet2NetGraphsView(sel, id, Admin){

        var text = sel;

        var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = "<center>"+xmlhttp.responseText+"</center>";
                
        }
                                                                                                                                                                                  
    }

    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/Net2NetGraphView.cgi?id="+id+"&n="+text,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}

function GetNet2NetGraphsViewBy(sel, id, value){

        var text = sel;

        var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = "<center>"+xmlhttp.responseText+"</center>";
                
        }
                                                                                                                                                                                  
    }

    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/Net2NetGraphViewBy"+value+".cgi?id="+id+"&n="+text,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}

function Search(form){

    id = document.getElementById("network").selectedIndex;

    radios = document.getElementById("custom-query-second").childNodes;

    graphtype = ""

    for(i=1; i<radios.length;i++){

        if(radios.item(i).checked){

            if(radios.item(i).value == 0){

                graphtype = "i/o";

            }

            else if(radios.item(i).value == 1){

                graphtype = "port";

            }

            else{

                graphtype = "p2p";

            }

        }

    }

    checks = document.getElementById("custom-query-third").childNodes;

    checked = "";

    for(i=1; i<checks.length;i++){

        if(checks.item(i).checked){

            checked += "&checkbox_marked="+checks.item(i).value;

        }

    }

    d1 = document.getElementById("custom-query-time").childNodes.item(3).value;

    d2 = document.getElementById("custom-query-time").childNodes.item(5).value;

    if(checked == ""){

        document.getElementById("content").innerHTML = "<center><iframe id='custom_frame' src='http://flows.hpcf.upr.edu/graph_r.cgi?id="+id+"&graphtype="+graphtype+"&d1="+d1+"&d2="+d2+"'></iframe></center>";

    }

    else{

        document.getElementById("content").innerHTML = "<center><iframe id='custom_frame' src='http://flows.hpcf.upr.edu/graph_r.cgi?id="+id+"&graphtype="+graphtype+checked+"&d1="+d1+"&d2="+d2+"'></iframe></center>";

    }
}

function AddGraph(){

    var gnum = parseInt(document.getElementById("gnumber").value);

    if(gnum%2 == 0 && gnum != 0){

        var graphid = document.getElementById("Graph").options[document.getElementById("Graph").selectedIndex].value;

        var gids = document.getElementById("graph_ids").value;

        if(gids.length == 0){

            document.getElementById("graph_ids").value = graphid;

        }

        else{

            document.getElementById("graph_ids").value += ","+graphid;

        }

        var xmlhttp;

        if (window.XMLHttpRequest){
  
            xmlhttp=new XMLHttpRequest();
  
        }
        
        else{

            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        
        }

        xmlhttp.onreadystatechange=function(){
  
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
    
                document.getElementById("graphs_preview_entry").innerHTML += "<td><iframe src='http://flows.hpcf.upr.edu/graphtest/"+xmlhttp.responseText+"'></iframe></td>";
            
            }
  
        }

        xmlhttp.open("GET","../../Controllers/GetGraphPath.cgi?gid="+graphid,true);
    
        xmlhttp.send();

        document.getElementById("gnumber").value = gnum+1;

    }

    else{

        var graphid = document.getElementById("Graph").options[document.getElementById("Graph").selectedIndex].value;

        var gids = document.getElementById("graph_ids").value;

        if(gids.length == 0){

            document.getElementById("graph_ids").value = graphid;

        }

        else{

            document.getElementById("graph_ids").value += ","+graphid;

        }

        var xmlhttp;

        if (window.XMLHttpRequest){
  
            xmlhttp=new XMLHttpRequest();
  
        }
        
        else{

            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        
        }

        xmlhttp.onreadystatechange=function(){
  
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
    

                document.getElementById("graphs_preview").innerHTML += "<tr id='graphs_preview_entry'><td><iframe src='http://flows.hpcf.upr.edu/graphtest/"+xmlhttp.responseText+"'></iframe></td></tr>";


            }
  
        }

        xmlhttp.open("GET","../../Controllers/GetGraphPath.cgi?gid="+graphid,true);
    
        xmlhttp.send();

        document.getElementById("gnumber").value = gnum+1;

    }

}

function GetViewGraph(vid, vname){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){

            document.getElementById("viewer-header").innerHTML = "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"+"<center><h2>"+vname+"</h2></center>";
                                                             
            document.getElementById("viewer-body").innerHTML = "<center>"+xmlhttp.responseText+"</center>";
                
        }
                                                                                                                                                                                  
    }

    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Views/GraphViews/ViewerGraphs.cgi?vid="+vid,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}

function AddGraphToView(form){

    graph_name = form.childNodes.item(0).value.toString();

    vid = form.childNodes.item(3)[form.childNodes.item(3).selectedIndex].value;

    graph_path = form.childNodes.item(7).value.toString();

    uid = form.childNodes.item(4).value;

    //alert(graph_path);

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                 
            alert("http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Controllers/AddGraph2View.cgi?vid="+vid+"&graph_name="+graph_name+"&graph_path="+graph_path);

            pid = form.id+"-status";

            document.getElementById(pid.toString()).innerHTML = "<center>"+xmlhttp.responseText+"</center>";
                
        }
                                                                                                                                                                                  
    }

    xmlhttp.open("GET","http://flows.hpcf.upr.edu/development/TOANMS/bootstrap_html/Controllers/AddGraph2View.cgi?vid="+vid+"&graph_name="+graph_name+"&graph_path="+graph_path,true);
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}
