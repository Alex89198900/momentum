const date = new Date();
const month=date.getMonth()
const hours = date.getHours();
const minutes = date.getMinutes();
const title1=document.querySelector('.title1');
const name1=document.querySelector('.name')
const currentDate=document.querySelector('.date__now');


function setLocalStorage() {
    localStorage.setItem('name1', name1.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('name1')) {
      name1.value = localStorage.getItem('name1');
    }
  }
  window.addEventListener('load', getLocalStorage);

function update(){
   let tod = document.querySelector('.hour')
   const dateNow = new Date()
   let h= dateNow.getHours()
   if(h<10) h='0'+h;
   tod.children[0].innerHTML=h+':'
   hourCompair=tod
 
   let m= dateNow.getMinutes()
   if(m<10) m='0'+m;
   tod.children[1].innerHTML=m+':'
 
  let s= dateNow.getSeconds()
  if(s<10) s='0'+s
   tod.children[2].innerHTML=s;
   
 }
 let timeId
 
 function clockStart(){
   timeId= setInterval(update,1000);
   update()
 }
 clockStart()
  const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dateNum = String(date.getDate()).padStart(2, '0');
const n = date.getDay();

currentDate.textContent=`${days[n]},${monthNames[date.getMonth()]} ${dateNum }`



function titleDay(){

  
  if(6<hours<12){
   title1.textContent='Good morning, '
  }
  if(hours>=12 && hours<18){
  title1.textContent='Good afternoon,'
  }
  if(hours>=18 && hours<24){
  title1.textContent='Good evening,'
  
  }
  if(hours>=0 && hours<5){
    title1.textContent='Good night, '
    }
  }
  
   titleDay()