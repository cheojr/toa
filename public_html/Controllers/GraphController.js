function GetGraphsView(id, Admin){

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

    if(Admin){

        xmlhttp.open("GET","../GraphViews/GraphView.cgi?id="+id+"&Admin=1",true);

    }

    else{

        xmlhttp.open("GET","Views/GraphViews/GraphView.cgi?id="+id,true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetGraphsViewBy(id, value, Admin){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = xmlhttp.responseText;
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

        xmlhttp.open("GET","../GraphViews/GraphView.cgi?id="+id+"&d="+value+"&Admin=1",true);

    }

    else{

        xmlhttp.open("GET","Views/GraphViews/GraphView.cgi?id="+id+"&d="+value,true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetPortGraphsView(sel, id, Admin){

        var text = sel.options[sel.selectedIndex].value;

        var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = xmlhttp.responseText;
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

        xmlhttp.open("GET","../GraphViews/GraphView.cgi?id="+id+"&p="+text+"&Admin=1",true);

    }

    else{

        xmlhttp.open("GET","Views/GraphViews/GraphView.cgi?id="+id+"&p="+text,true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}


function GetNet2NetGraphsView(sel, id, Admin){

        var text = sel.options[sel.selectedIndex].value;

        var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("content").innerHTML = xmlhttp.responseText;
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

        xmlhttp.open("GET","Views/GraphViews/GraphView.cgi?id="+id+"&n="+text+"&Admin=1",true);

    }

    else{

        xmlhttp.open("GET","Views/GraphViews/GraphView.cgi?id="+id+"&n="+text,true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}

function Search(form){

    id = document.getElementById("network").selectedIndex;

    radios = document.getElementById("second_form").childNodes;

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

    checks = document.getElementById("third_form").childNodes;

    checked = "";

    for(i=1; i<checks.length;i++){

        if(checks.item(i).checked){

            checked += "&checkbox_marked="+checks.item(i).value;

        }

    }

    d1 = document.getElementById("time_form").childNodes.item(3).value;

    d2 = document.getElementById("time_form").childNodes.item(5).value;

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
