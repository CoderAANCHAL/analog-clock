
const hour=document.getElementById('hr');
const minute=document.getElementById('min');
const second=document.getElementById('sec');



setInterval(()=> {
  d= new Date();
  hr= d.getHours()*30;
 min= d.getMinutes()*6;
  sec= d.getSeconds()*6;

hour.style.transform= `rotateZ(${hr+min/12}deg)`;
minute.style.transform=`rotateZ(${min}deg)`;
second.style.transform=`rotateZ(${sec}deg)`;
},1000);