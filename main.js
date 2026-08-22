let gameseq = [];
 let userseq = [];
 let clp = ["red","orange","purple","blue"];

 let str = document.querySelector("body");
 let dis = document.querySelector("h2");
 let btn = document.querySelectorAll("#btn");
 let hig = document.querySelector("p");

 let level = 0;
 let started = false;
 let score = 0;
 let high = 0;
 
 document.addEventListener("keypress",function(event){
   console.dir(event);
    if(started == false){
        started = true;
        console.log("game start");
        levelup();
    }
    
 });
 
 function levelup(){
    level++;
    dis.innerText = `level ${level}`;
    userseq = [];
    
    let randcolorflash = Math.floor(Math.random()*4);
    console.log(randcolorflash);
    let flash1 = clp[randcolorflash];
    gameseq.push(flash1);
    console.log(gameseq);

    let rndbtn = document.querySelector(`.${flash1}`);
    console.log(flash1);
    console.log(rndbtn);

    fl(rndbtn);
    console.log(gameseq);
 }

 function fl(btn){
   btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
    
}
function fk(btn){
   btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },200);
   }

function btnpress(ev){
   let be = event.target;
   console.log(ev.target);
   fk(be);
  
let col = be.classList[0];
console.log(col);
userseq.push(col);
console.log(userseq);

ans(userseq.length - 1);

}

for(bt of btn){
   bt.addEventListener("click",btnpress);
}
function ans(inx){
   if(userseq[inx] === gameseq[inx]){
      if(userseq.length == gameseq.length){
         score++;
         high++;
         setTimeout(levelup,1000);
      }
      
   }else{
      dis.innerText = `game over! your score is:${score}`;
      hig.innerText =`high score : ${high}`;
      reset();
      str.classList.add("over");
      setTimeout(function(){
        str.classList.remove("over");
    },300);
   }
}
function reset(){
   started = false;
   level = 0;
   score = 0;
   gameseq = [];
   userseq = [];
}
