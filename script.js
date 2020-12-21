

// var mywindow = document.querySelector('#mywindow');
var mywindow = document.getElementsByClassName('mybutton')[0];

function addanimation(){
    mywindow.classList.add("myanimated");
 }

 const TklikN = document.getElementsByClassName('klikN')[0];
//  TklikN.addEventListener("mouseover", move);
 TklikN.addEventListener("mouseover", movehover);
 TklikN.addEventListener("click", moveclick );

//  const TklikY = document.getElementsByClassName('klikY')[0];
// TklikY.addEventListener("click", move);

function move(){
    kali=20;
    addanimation();
    random1=(mywindow.offsetTop+(Math.floor(Math.random() *10)-5)+kali);
    random2=(mywindow.offsetLeft+(Math.floor(Math.random() )));
    if(random1>0 && random1<33)random1=33+20;
    if(random1<0 && random1>-33)random1=-33-20;
    if(random2>0 && random2<83)random2=83+20;
    if(random2<0 && random2>-83)random2=-83-20;
    if(random1==0 && random2==0)random1=-100;
    mywindow.style.top  = random1 + 'px';
    mywindow.style.left = random2 + 'px';
    if(random1<0 || ((random1+mywindow.clientHeight)>window.innerHeight)){
        mywindow.style.top = "calc(50% - "+mywindow.clientHeight/2+"px)";
    }
    if(random2<0  || ((random2+mywindow.clientWidth)>window.innerWidth)){
        mywindow.style.left = "calc(50% - "+mywindow.clientWidth/2+"px)";
    }
   
   
}
function move2(){
    kali=50;
    addanimation();
    random1=(mywindow.offsetTop+(Math.floor(Math.random() * 10)-5)*kali);
    random2=(mywindow.offsetLeft+(Math.floor(Math.random() * 10)-5)*kali);
    if(random1>0 && random1<33)random1=33+20;
    if(random1<0 && random1>-33)random1=-33-20;
    if(random2>0 && random2<83)random2=83+20;
    if(random2<0 && random2>-83)random2=-83-20;
    if(random1==0 && random2==0)random1=-100;
    mywindow.style.top  = random1 + 'px';
    mywindow.style.left = random2 + 'px';
    if(random1<0 || ((random1+mywindow.clientHeight)>window.innerHeight)){
        mywindow.style.top = "calc(50% - "+mywindow.clientHeight/2+"px)";
    }
    if(random2<0  || ((random2+mywindow.clientWidth)>window.innerWidth)){
        mywindow.style.left = "calc(50% - "+mywindow.clientWidth/2+"px)";
    }
}


function moveclick(){
    
  addanimation();
  random3 = (mywindow.offsetTop+(Math.floor(Math.random()* 10)-5)* 50);
  random3 = (mywindow.offsetLeft+(Math.floor(Math.random()* 10)-5)* 50);
  mywindow.style.top = random3 + 'px';

  if (random3<0 || ((random3+mywindow.clientHeight)> window.innerHeight)){
      mywindow.style.top ="calc(50% - "+mywindow.clientHeight/2+"px";
  }
  mywindow.style.left = random3 + 'px';
  if (random3<0 || ((random3+mywindow.clientWidth)> window.innerWidth)){
      mywindow.style.left ="calc(50% - "+mywindow.clientWidth/2+"px";
  }
  console.log("ini ramdom click"+ random3);
}
function movehover(){
    addanimation();
    random4 = (mywindow.offsetTop+(Math.floor(Math.random()*10)-5)*50);
    random4 = (mywindow.offsetLeft+(Math.floor(Math.random()*10)-5)*50);
    mywindow.style.top = random4 + 'px';
    mywindow.style.left = random4 + 'px';
    if (random4<0 || ((random4+mywindow.clientHeight)> window.innerHeight)){
        mywindow.style.top ="calc(50% - "+mywindow.clientHeight/2+"px";
    }
    mywindow.style.left = random4 + 'px';
    if (random4<0 || ((random4+mywindow.clientWidth)> window.innerWidth)){
        mywindow.style.left ="calc(50% - "+mywindow.clientWidth/2+"px";
    }
    console.log("ini ramdom hover"+ random4);

}