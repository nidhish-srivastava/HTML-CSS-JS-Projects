const card=document.querySelector('.card');
const container=document.querySelector('.container');




container.addEventListener('mousemove',(e)=>{  
    let xAxis=(window.innerWidth/2-e.pageX)/10;   
    let yAxis=(window.innerHeight/2-e.pageY)/10;  

    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});



container.addEventListener('mouseleave',(e)=>{
   card.style.transform=`rotateY(0deg) rotateX(0deg)`;
   card.style.transition="all 0.2s ease";  
});

container.addEventListener('mouseenter',(e)=>{
    card.style.transition="0.2 ease";  
});



