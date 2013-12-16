function EnableDateTimePicker(){

    $("#calendar1, #calendar2").datetimepicker({dateFormat: 'yyyy-mm-dd HH:MM:ss'});

}

function GetNetworksMenu(Admin){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("menu_content").innerHTML = xmlhttp.responseText;
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

        xmlhttp.open("GET","../MenuViews/NetworksMenuView.cgi?Admin=1", true);

    }

    else{

        xmlhttp.open("GET","Views/MenuViews/NetworksMenuView.cgi", true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetFirstSystemMenu(Admin){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){

        if (xmlhttp.readyState==4 && xmlhttp.status==200){

            document.getElementById("menu_content").innerHTML = xmlhttp.responseText;
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

         xmlhttp.open("GET","../MenuViews/FirstSystemMenuView.cgi?Admin=1", true);

    }

    else{

         xmlhttp.open("GET","Views/MenuViews/FirstSystemMenuView.cgi", true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetSecondSystemMenu(id, Admin){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("second_form").innerHTML = xmlhttp.responseText;

            document.getElementById("third_form").innerHTML = "";

            document.getElementById("time_form").innerHTML = "";
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

         xmlhttp.open("GET","../MenuViews/SecondSystemMenuView.cgi?id="+id+"&Admin=1",true);

    }

    else{

         xmlhttp.open("GET","Views/MenuViews/SecondSystemMenuView.cgi?id="+id,true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function ClearThirdSystemMenu(){

    document.getElementById('third_form').innerHTML = "";

}

function GetThirdSystemMenu(id, state, Admin){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("third_form").innerHTML = xmlhttp.responseText;
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

        xmlhttp.open("GET","../MenuViews/ThirdSystemMenuView.cgi?id="+id+"&state="+state+"&Admin=1",true);

    }

    else{

         xmlhttp.open("GET","Views/MenuViews/ThirdSystemMenuView.cgi?id="+id+"&state="+state,true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetTimeSystemMenu(Admin){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("time_form").innerHTML = xmlhttp.responseText;
             
             EnableDateTimePicker();

        }
                                                                                                                                                                                  
    }

    if(Admin){

        xmlhttp.open("GET","../MenuViews/TimeSystemMenuView.cgi?Admin=1", true);

    }

    else{

        xmlhttp.open("GET","Views/MenuViews/TimeSystemMenuView.cgi", true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();                                                                                

}

function GetPortNetSystemMenu(id, count, Admin){

    var xmlhttp;

    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                                
        xmlhttp = new XMLHttpRequest();
    
    }

    else{// code for IE6, IE5
                                                                  
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }
                                                                                 
    xmlhttp.onreadystatechange=function(){
                                                                                                          
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                                                             
            document.getElementById("port_net_menu_container").innerHTML = xmlhttp.responseText;

            if($("#port_net_menu_container").is(':hidden')){

                $('#port_net_menu_container').css('top', 140+(60*count));

                $('#port_net_menu_container').fadeIn();                

            }

            else{

                if(parseInt($('#port_net_menu_container').css('top')) != 140+(57*count)){

                    $('#port_net_menu_container').fadeOut(function(){ 

                        $('#port_net_menu_container').css('top', 140+(65*(count)));

                         $('#port_net_menu_container').fadeIn();


                    });
  
                } 

                else{

                    $('#port_net_menu_container').fadeOut(); 

                }

            }
                
        }
                                                                                                                                                                                  
    }

    if(Admin){

        xmlhttp.open("GET","../MenuViews/PortNetSystemMenuView.cgi?id="+id+"&Admin=1",true);

    }

    else{

        xmlhttp.open("GET","Views/MenuViews/PortNetSystemMenuView.cgi?id="+id,true);

    }
                     
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                                                                                                                                                                                          
    xmlhttp.send();

}
