const login= document.getElementById("loginformWrapper");
const logo = document.getElementById("logo");
const preloader= document.getElementById("loader");
const sponsor=document.getElementById("spons");
const ctas= document.getElementById("ctas");


preloader.addEventListener("click",()=>{
  logo.style.top="6%";
  logo.style.opacity = "0";
  logo.style.opacity = "1";
  ctas.style.opacity="0";
  logo.src = "Images/Techie2.png"
  logo.style.width = "120px";
  logo.style.height = "120px";
  login.style.top="30%";
  setTimeout(()=>{
    sponsor.style.top="55%";
  },500)
  
})



