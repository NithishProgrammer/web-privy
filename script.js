const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el));


document.addEventListener("mousemove",(e)=>{

const blobs=document.querySelectorAll(".blob");

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

blobs.forEach((blob,index)=>{

const speed=(index+1)*18;

blob.style.transform=
`translate(${x*speed}px,${y*speed}px)`;

});

});