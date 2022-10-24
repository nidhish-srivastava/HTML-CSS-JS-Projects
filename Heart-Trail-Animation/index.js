const bur=document.querySelector("body");
bur.addEventListener("mousemove", (event)=>{
    const x=event.offsetX;  
    const y=event.offsetY;  

    
    
    const spanE1=document.createElement("span");
    
    spanE1.style.left = x+"px";
    spanE1.style.top=y+"px";

    const size=Math.random()*100;
    
    spanE1.style.width=size+"px";
    spanE1.style.height=size+"px";


    setTimeout(()=>{
    spanE1.remove();
    },3000);



     bur.appendChild(spanE1); 
     });
