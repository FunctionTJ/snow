let tcanvas=document.querySelector('canvas');
let pen=tcanvas.getContext('2d');
let w=window.innerWidth;
let h=window.innerHeight*1.2;
let tw=w+15;
let th=h+15;

tcanvas.width=w;
tcanvas.height=h;
            
let arr=[];
for(let i=0;i<230;i++){
    arr.push({
        x:Math.random()*w,
        y:Math.random()*h,
        r:Math.random()*2 +1,
        });
}

let draw= ()=>{
    pen.clearRect(0,0,w,h);
    pen.beginPath();
    pen.fillStyle='#fff';
    pen.shadowColor='#fff';
    pen.shadowBlur=5;
    
    for(let i=0;i<200;i++){
        let ar=arr[i];
        pen.moveTo(ar.x,ar.y);
        pen.arc(ar.x,ar.y,ar.r,0,Math.PI*2)
        
    }
    pen.fill();
    pen.closePath();
    
}
let chg=()=>{
    for(let i=0;i<230;i++){
        let er=arr[i];
        er.x += Math.random()*3+1;
        er.y += Math.random()*3+1;
        if(er.x>=tw){
            er.x=0;
            
        }
        if(er.y>=th){
            er.y=0;
            
        }
        
    }
    
}
setInterval(()=>{draw();chg()},50)
