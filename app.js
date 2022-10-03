let hom=document.getElementById("home");
let left=document.querySelector(".left-half");
let abo=document.getElementById("about");
let skills=document.querySelector(".skill");
let edu=document.querySelector(".education");
let bod=document.querySelector(".body");
let time_id;
let curr_pos;
abo.addEventListener('click',e=>{
skills.classList.add("sk");
edu.classList.add("sk");
});
bod.addEventListener('click',e=>{
    skills.classList.remove("sk");
    edu.classList.remove("sk");
});
hom.addEventListener('click',e=>{
    curr_pos=left.style.transform;
left.style.transform=curr_pos+"rotateY(180deg)";
curr_pos=left.style.transform;
time_id=setInterval(removerot,1000);
});
left.addEventListener('mouseover',e=>{
    left.style.transform="rotateY(180deg)";
});
left.addEventListener('mouseout',e=>{
    left.style.transform="rotateY(0deg)";
});


let i=0;
function removerot(){
    i++;
    if(i==5){
        clearInterval(time_id);
        

        left.style.transform="rotateY(0deg)";
        i=0;
    }

}
