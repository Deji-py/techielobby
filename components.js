const myname= document.getElementById("name");
const myskill= document.getElementById("skill");
const mylevel = document.getElementById("level");
const myimage= document.getElementById("image");

const drop= document.getElementById("dropbtn");
const mydet= document.getElementById("det");
let mydetail=[myname, myskill, mylevel,myimage]

class userDetails{
 setdetails(username, skill,level, image){
    this.username= username;
    this.skill = skill;
    this.level = level;
    this.image = image;
  }
 getdetails(){
   let det =[this.username,this.skill, this.level, this.image]
   return det;
 }
}

let ayo = new userDetails();
ayo.setdetails("Adebayo Akinloluwa", "Javascript", "professional", "Images/profile.png");

let box = document.getElementById("cont");

let user= ayo.getdetails();

for(let i=0; i<mydetail.length-1; i++){
  mydetail[i].textContent= user[i];
}
mydetail[3].src=user[3];

let opened= false;
drop.addEventListener("click",()=>{
 if(opened==false){
  mydet.style.top="8%";
  opened=true;
 }
 else{
   mydet.style.top="-20%";
   opened=false;
 }
})

let message= document.getElementById("message");
let people= document.getElementById("people");
let notification = document.getElementById("notification")



const msgheader=document.getElementById("msgheader");
const msgicon = document.getElementById("msgicon");

let messageisopened= false;
message.addEventListener("click",()=>{
  if(messageisopened==false){
  message.classList.add("msg");
  msgheader.style.display="block";
  messageisopened=true;
  }
  else if(messageisopened==true){
    msgicon.addEventListener("click",()=>{
      msgheader.style.display="none";
      message.classList.remove("msg");
    })
    messageisopened=false;
  }
})

const pplheader = document.getElementById("pplheader");

const pplicon= document.getElementById("pplicon");

let peopleisopened= false;
people.addEventListener("click",()=>{
  if(peopleisopened==false){
  people.classList.add("msg");
  pplheader.style.display="block";
  peopleisopened=true;
  }
  else if(peopleisopened==true){
    pplicon.addEventListener("click",()=>{
    pplheader.style.display="none"; 
    people.classList.remove("msg");
    })
    peopleisopened=false;
  }
})




function postcard(name,skill,source){
 let container = document.getElementById("cont");
  const card= document.createElement("div");
  card.classList.add("cardWrapper")
  const poster=document.createElement("div");
  poster.classList.add("poster");
  const postInfo= document.createElement("div");
  postInfo.classList.add("info");
  const img= document.createElement("img");
 const posterName = document.createElement("h4");
const posterSkill = document.createElement("h4");
const visitcta= document.createElement("button");

/*postwrapper*/
const postwrapper= document.createElement("div");
postwrapper.classList.add("postwrapper");
const postEngager= document.createElement("div");
const engagebtnWrapper=document.createElement("div");
postEngager.classList.add("postengager");
engagebtnWrapper.classList.add("engagebtnwrapper");

var icons=["vote", "comment","share"];
var imgsrc=["Svg/circles.svg","Svg/hand-rock.svg","Images/share.svg"]
const comment = document.createElement("input");
comment.type="text";
comment.classList.add("comment");
comment.placeholder="Comment";
comment.classList.add("commentbox");
postEngager.appendChild(comment)
for (let i=0; i<=2;i++){
  const engageicon=document.createElement("img");
  const engagebtn= document.createElement("button");
  engageicon.src=imgsrc[i];
  engagebtn.classList.add("engagebtn");
  engageicon.classList.add("iconengage")
  engagebtn.append(engageicon);
  engagebtnWrapper.appendChild(engagebtn);
  
}


postEngager.appendChild(engagebtnWrapper);
/*wrapper end*/
visitcta.id="visitcta";
visitcta.textContent="Lobby";
 posterName.textContent= name;
 posterSkill.textContent= skill;
 img.src=source;
 img.style.borderRadius="100px";
 img.classList.add("icon");
 postInfo.appendChild(img);
 postInfo.appendChild(posterName);
 postInfo.appendChild(posterSkill);
 poster.appendChild(postInfo);
 poster.appendChild(visitcta)
 card.appendChild(poster);
 postwrapper.appendChild(card);
 postwrapper.appendChild(postEngager);
 let showpost=container.append(postwrapper);
 return showpost;
}


postcard("bolu Ademola","javascript","Images/profile.png");
postcard("blessing Iruhboh","css","Images/Google.png")

postcard("MichealXx","css","Images/Ayodeji.jpg");
postcard("Ajigbade", "React native", "Images/Label.png")

postcard(user[0],user[1],user[3])

const home=document.getElementById("cont");
const homeicon = document.getElementById("homeicon");
const tutorialicon = document.getElementById("tuticon");
const tut= document.getElementById("tutorial");


const labelnameWrapper = document.getElementById("labelnameWrapper");
const labelimg = document.createElement("img");
const searchbar= document.createElement("input");
searchbar.type="text";
searchbar.id="searchbar";
searchbar.placeholder="Search latest tutorials";
labelimg.id="labelname";
labelimg.classList.add("labelname")
labelname=document.getElementById("labelname")
labelimg.src="Images/Lobby.png"
function tutorialWindow(){
  labelname.remove();
  labelnameWrapper.append(searchbar);
  tut.style.display="flex";
  home.style.display="none";
  tutorialicon.classList.add("active");
  homeicon.classList.remove("active");
  
}

function myhome(){
  searchbar.remove();
  labelnameWrapper.append(labelname)
  tut.style.display="none";
  home.style.display="block";
tutorialicon.classList.remove("active");
  homeicon.classList.add("active");
}