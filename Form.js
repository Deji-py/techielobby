const err_alert= document.getElementById("alert");
var pop=document.getElementById("signpop");
function checkmail(){
  let x= document.forms["loginform"]
 ["mail"].value
  let mail= "bayo@gmail.com";
if(x!=mail|| x ==""){
  err_alert.style.opacity="1";
  err_alert.textContent="*Wrong username or password* ";
  setTimeout(()=>{
  pop.style.opacity="1";
  pop.style.left="68%";
  },1000);
 return false;
}
}
