let h5El=document.querySelectorAll("h5")
let random=Math.ceil(Math.random()*6);
console.log(random);
let img=document.querySelectorAll("img")

function buttn(){
    if(random===1 ||random===6 ||random===6){

        img[0].src="Right logo.jpg"
    }
    else if(random!==1){
        img[0].src="X logo.png"
       }
}

    function button2(){
   
     if(random===2 ||random===5){
        img[4].src="X logo.png"
     

    }
    else if(random!==2 ){
        img[4].src="Right logo.jpg"
     
   }
 
}
function button3(){

     if(random===3 ||random===2 ||random=== 6){
        img[8].src="Right logo.jpg"
    
    }
    else if(random!==3){
     img[8].src="X logo.png"
    }
}

function button4(){
    if(random===4  || random===2){
        img[2].src="Right logo.jpg"

    }
 
    else if(random!==4|| random===6){
        img[2].src="X logo.png"

    }
   

}
function button5(){
    if(random===5){
           img[5].src="Right logo.jpg"
   
    }
    else if(random!==5){
        img[5].src="X logo.png"

    }

}


function button6(){
    if(random===5){
  img[1].src="Right logo.jpg"

    }
    else if(random!==5){
       img[1].src="X logo.png"

    }

}
function button7(){
    if(random===5 ||random===2 ||random===6){
             img[3].src="Right logo.jpg"

    }
    else if(random!==5){
          img[3].src="X logo.png"

    }

}
function button8(){
    if(random===5 ||random===3 ||random===4){
        img[6].src="Right logo.jpg"

    }
    else if(random!==5 ||random===6 ){

        img[6].src="X logo.png"

    }
    else if(random===1){

        img[6].src="X logo.png"
        h5El[0].innerHTML="YOU WIN 3"

    }

}
function button9(){
    if(random===5 || random===1){
        img[7].src="Right logo.jpg"

    }
    else if(random!==5){
        img[7].src="X logo.png"

    }
    else if(random===1){
        img[7].src="Right logo.jpg"
        h5El[0].innerHTML="YOU WIN 1"
      

    }

}


