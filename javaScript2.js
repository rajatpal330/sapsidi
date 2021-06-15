
var score,activePlayer,previous,playing,dice,win;
var nw=[0,0];
init();
document.querySelector('.rolldice').addEventListener('click',function(){
    if(playing===1){
    dice=Math.floor(Math.random() * 6) + 1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    var dicePicDOM=document.querySelector('.dicepic');
    dicePicDOM.src='dice-' + dice + '.png';
     nw=[0,0];
    
        nw[activePlayer]=previous[activePlayer]+dice;
        if(nw[activePlayer]===16){
           nw[activePlayer]=55; 
        }
        if(nw[activePlayer]===20){
           nw[activePlayer]=90; 
        }
        if(nw[activePlayer]===31){
           nw[activePlayer]=4; 
        }
        if(nw[activePlayer]===33){
           nw[activePlayer]=92; 
        }
        if(nw[activePlayer]===46){
           nw[activePlayer]=87; 
        }
        if(nw[activePlayer]===74){
           nw[activePlayer]=14; 
        }
        if(nw[activePlayer]===99){
           nw[activePlayer]=15; 
        }
        score[activePlayer]=nw[activePlayer];
        if(activePlayer===0){
           document.querySelector('#block'+previous[activePlayer]).innerHTML='<p>'+previous[activePlayer]+'</p>';
               if(nw[activePlayer]<=100){
                    document.querySelector('#block'+nw[activePlayer]).innerHTML='<img src="simple-star-blue.png" width="20px" height="20px">'; 
               }
               console.log('player-'+activePlayer+'-->'+nw[activePlayer]);
        }
        else{
           document.querySelector('#block'+previous[activePlayer]).innerHTML='<p>'+previous[activePlayer]+'</p>';
                if(nw[activePlayer]<=100){
                   document.querySelector('#block'+nw[activePlayer]).innerHTML='<img src="simple-star-green.png" width="20px" height="20px">';
                }
                console.log('player-'+activePlayer+'-->'+nw[activePlayer]);
         }
         if(score[activePlayer]>=100){
                   winning();
                   playing=0;
                }
            previous[activePlayer]=nw[activePlayer];
        if(dice!==6){
            nextPlayer();
        }
    }      
    
});


document.querySelector('.start').addEventListener('click',function(){
    playing = 1;
    if(win===1){
        if(nw[activePlayer]===100){
           document.querySelector('#block'+previous[0]).innerHTML='<p>'+previous[0]+'</p>';
           document.querySelector('#block'+previous[1]).innerHTML='<p>'+previous[1]+'</p>'; 
        }
        else{
            if(dice!==6){
                 if(activePlayer === 0){
                      document.querySelector('#block'+previous[0]).innerHTML='<p>'+previous[0]+'</p>';
                 }else{
                      document.querySelector('#block'+previous[1]).innerHTML='<p>'+previous[1]+'</p>';
                 }
            }
            else{
                  if(activePlayer === 0){
                       document.querySelector('#block'+previous[1]).innerHTML='<p>'+previous[1]+'</p>';
                  }else{
                       document.querySelector('#block'+previous[0]).innerHTML='<p>'+previous[0]+'</p>';
                  }
            }
       }
    }else{
        document.querySelector('#block'+previous[0]).innerHTML='<p>'+previous[0]+'</p>';
        document.querySelector('#block'+previous[1]).innerHTML='<p>'+previous[1]+'</p>';
    }
    
    init();
});

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer=1;
        notactive=0;
    document.querySelector('.arrow-'+activePlayer).style.display='block';
    document.querySelector('.arrow-'+notactive).style.display='none';
    }else{
        activePlayer=0;
        notactive=1;
       document.querySelector('.arrow-'+activePlayer).style.display='block';
       document.querySelector('.arrow-'+notactive).style.display='none';
    
    }
}
function winning(){
    win = 1;
    if(activePlayer === 0){
        document.querySelector('.winner-0').style.display='block';
    }else{
        document.querySelector('.winner-1').style.display='block';
    }
    
}
    
    
    
function init(){
score=[1,1];
activePlayer=0;
previous=[1,1];
playing=1;
win=0;
document.querySelector('#block1').innerHTML='<img src="simple-star-blue.png" width="20px" height="20px" >';
document.querySelector('#block1').innerHTML='<img src="simple-star-green.png" width="20px" height="20px" >';
document.querySelector('.arrow-1').style.display='none';
document.querySelector('.dice').style.display='none';
document.querySelector('.winner-0').style.display='none';
document.querySelector('.winner-1').style.display='none';
} 

