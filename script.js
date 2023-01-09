let start= document.querySelector('.stars');
let moon= document.querySelector('.moon');
let mountains3= document.querySelector('.mountains3');
let mountains4= document.querySelector('.mountains4');
let river5= document.querySelector('.river5');
let boat6= document.querySelector('.boat6'); 
let nuru= document.querySelector('.nuru');
onscroll= function(){
    let value=scrollY;
     start.style.left=value +'px';
     moon.style.top=value *4 +'px';
     mountains3.style.top=value *2 +'px';
     mountains4.style.top=value *1.5 +'px';
     river5.style.top=value +'px';
     boat6.style.top=value +'px';
     boat6.style.left=value*3 +'px';
     nuru.style.fontSize=value +'px';
     if(scrollY >=67){
        nuru.style.fontSize=67 +'px';
        nuru.style.position='fixed';
      
        if(scrollY >=435){
            nuru.style.display='none';
                    }else{
                        nuru.style.display='block';
                    }
                    if(scrollY >=107){
                       document.querySelector('.images-section').style.background='linear-gradient(#376281,#10001f)'
                    }else{
                       document.querySelector('.images-section').style.background='linear-gradient(rgb(62, 0, 87) , rgb(37, 1, 51))'
                    }
     }
}
