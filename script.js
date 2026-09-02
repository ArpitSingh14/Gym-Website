/* LOADER */

window.onload=function(){

const loader=document.getElementById("loader");

if(loader){
loader.style.display="none";
}

};

/* HERO TEXT ROTATION */

const heroText=document.getElementById("heroText");

if(heroText){

const texts=[
"Transform Your Body",
"Push Beyond Your Limits",
"Train Hard Stay Strong"
];

let textIndex=0;

setInterval(()=>{

textIndex++;

if(textIndex>=texts.length){
textIndex=0;
}

heroText.innerText=texts[textIndex];

},3000);

}

/* GALLERY SLIDER */

const slides=document.querySelectorAll(".slide");

if(slides.length>0){

let index=0;

setInterval(()=>{

slides[index].classList.remove("active");

index++;

if(index>=slides.length){
index=0;
}

slides[index].classList.add("active");

},3000);

}

/* MOBILE MENU */

const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");

if(menuToggle && navMenu){

menuToggle.onclick=function(){
navMenu.classList.toggle("active");
};

}

/* SCROLL REVEAL */

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;
const windowHeight=window.innerHeight;

if(top < windowHeight-100){
section.classList.add("active");
}

});

});

/* GALLERY POPUP */

const galleryImages=document.querySelectorAll(".gallery-img");
const popup=document.getElementById("popup");
const popupImg=document.getElementById("popupImg");
const closePopup=document.getElementById("closePopup");

if(galleryImages.length>0){

galleryImages.forEach(img=>{

img.onclick=()=>{
popup.style.display="flex";
popupImg.src=img.src;
};

});

}

if(closePopup){

closePopup.onclick=()=>{
popup.style.display="none";
};

}

/* STATS COUNTER */

const counters=document.querySelectorAll(".counter");

if(counters.length>0){

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");
const c=+counter.innerText;

const increment=target/200;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(updateCounter,5);

}else{

counter.innerText=target;

}

};

updateCounter();

});

}

/* SCROLL PROGRESS BAR */

const progressBar=document.getElementById("progressBar");

if(progressBar){

window.addEventListener("scroll",function(){

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(scrollTop/height)*100;

progressBar.style.width=scrolled+"%";

});

}

/* WORKOUT SCHEDULE */

const daySelect=document.getElementById("daySelect");

if(daySelect){

const workouts={
monday:"Chest + Triceps",
tuesday:"Back + Biceps",
wednesday:"Leg Day",
thursday:"Shoulders + Core",
friday:"Full Body HIIT"
};

daySelect.addEventListener("change",function(){

const day=this.value;

document.getElementById("scheduleOutput").innerHTML="<p>"+workouts[day]+"</p>";

});

}

/* BMI CALCULATOR */

function calculateBMI(){

let h=document.getElementById("height").value/100;
let w=document.getElementById("weight").value;

let bmi=w/(h*h);

document.getElementById("bmiResult").innerText="Your BMI: "+bmi.toFixed(2);

}

/* DIET GENERATOR */

function generateDiet(){

let goal=document.getElementById("goal").value;

let diet="";

if(goal==="weightloss"){
diet="Oats, Fruits, Salads, Paneer, Vegetables";
}

if(goal==="muscle"){
diet="Paneer, Rice, Milk, Soy, Protein Foods";
}

document.getElementById("dietOutput").innerText=diet;

}

/* WORKOUT RECOMMENDATION */

function suggestWorkout(){

let level=document.getElementById("level").value;

let plan="";

if(level==="beginner"){
plan="Pushups, Squats, Plank";
}

if(level==="intermediate"){
plan="Bench Press, Pullups, Lunges";
}

if(level==="advanced"){
plan="Deadlift, Squats, HIIT";
}

document.getElementById("workoutOutput").innerText=plan;

}

/* WORKOUT BUILDER */

function buildWorkout(){

let muscle=document.getElementById("muscle").value;

let plan="";

if(muscle==="chest"){
plan="Bench Press, Pushups, Chest Fly";
}

if(muscle==="legs"){
plan="Squats, Lunges, Leg Press";
}

if(muscle==="back"){
plan="Pullups, Deadlift, Lat Pulldown";
}

document.getElementById("builderOutput").innerText=plan;

}

/* WORKOUT TRACKER */

function addWorkout(){

let ex=document.getElementById("exercise").value;
let sets=document.getElementById("sets").value;
let reps=document.getElementById("reps").value;

let li=document.createElement("li");

li.innerText=ex+" - "+sets+" sets x "+reps+" reps";

document.getElementById("workoutList").appendChild(li);

}

/* 3D CAROUSEL */

const carousel=document.getElementById("carousel");
const track=document.getElementById("carouselTrack");

if(carousel && track){

let rotation=0;
let autoRotate=true;

setInterval(()=>{

if(autoRotate){

rotation+=0.3;

track.style.transform="rotateY("+rotation+"deg)";

}

},30);

carousel.addEventListener("mousemove",(e)=>{

autoRotate=false;

let rect=carousel.getBoundingClientRect();

let x=e.clientX-rect.left;

let percent=(x/rect.width)-0.5;

rotation+=percent*5;

track.style.transform="rotateY("+rotation+"deg)";

});

carousel.addEventListener("mouseleave",()=>{

autoRotate=true;

});

}

/* PARTICLE BACKGROUND */

const canvas=document.getElementById("particles");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:Math.random()*0.5,
dy:Math.random()*0.5

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x>canvas.width)p.x=0;
if(p.y>canvas.height)p.y=0;

});

requestAnimationFrame(animate);

}

animate();

}

/* LOGIN / SIGNUP */

function signup(){

let user=document.getElementById("signupUser").value;
let pass=document.getElementById("signupPass").value;

localStorage.setItem("gymUser",user);
localStorage.setItem("gymPass",pass);

document.getElementById("authMessage").innerText="Account Created!";

}

function login(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

let storedUser=localStorage.getItem("gymUser");
let storedPass=localStorage.getItem("gymPass");

if(user===storedUser && pass===storedPass){

document.getElementById("authMessage").innerText="Login Successful";

}else{

document.getElementById("authMessage").innerText="Invalid Login";

}

}
