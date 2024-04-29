function myfunction(){

  var username = document.getElementById("Username")
  var Email = document.getElementById("Email")
  var Userpassword = document.getElementById("Userpassword")
  var conformpassword = document.getElementById("conformpassword")
 if(username==""){
  document.getElementById("userNM").innerHTML = "Please enter the username"
 }
 else if(username!=""){
  document.getElementById("userNM").innerHTML = ""
 }
  if(Email==""){
    document.getElementById("email").innerHTML="Please enter the Email address";
  }
  else if(Email!=''){
  document.getElementById("email").innerHTML="";
  }
  if(Userpassword ==""){
  document.getElementById("pass").innerHTML="Please enter the password";
  }
  else if(Userpassword!=""){
    document.getElementById("pass").innerHTML=""
  }
  if(conformpassword==""){
    document.getElementById("con_pass").innerHTML="Please enter the conform password";}
  else if(conformpassword!=""){
    document.getElementById("con_pass").innerHTML="";}
  
  }
