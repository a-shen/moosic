document.addEventListener("intel.xdk.facebook.login",function(e){ 
   if (e.success === true) { 
     console.log("Facebook Log in Successful"); 
   } 
   else { 
     console.log("Unsuccessful Login"); 
   } 
},false); 
intel.xdk.facebook.login("publish_stream,publish_actions,offline_access"); 



var facebookUserID = "me"; //me = the user currently logged into Facebook 
document.addEventListener("intel.xdk.facebook.request.response",function(e) { 
  console.log("Facebook User Friends Data Returned"); 
  if (e.success == true) { 
    var data = e.data.data; 
    var outHTML = ""; 
    for (var r=0; r< data.length; r++) { outHTML += ""; } 
    document.getElementsByTagName("body")[0].innerHTML = outHTML; 
    document.removeEventListener("intel.xdk.facebook.request.response"); 
  } 
},false); 
intel.xdk.facebook.requestWithGraphAPI(facebookUserID + "/friends","GET",""); 
