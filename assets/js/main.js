let slider_img=[
     'assets/img/img1.jfif',
     'assets/img/img2.jpg',
     'assets/img/img3.jpg',
     'assets/img/img4.jpg',
     'assets/img/img5.jpg',
]

let img=document.querySelector('#slider img');
img.src=slider_img[0];

let index=0;

let next=document.querySelector('.next');

next.addEventListener('click',function() {
    index++;
    
     if(index>slider_img.length-1){
            index=0;
     }

    img.src=slider_img[index];
})

let left=document.querySelector('.left');

left.addEventListener('click',function() {
    index--; 
     if(index==-1){
            index=slider_img.length-1;
     }

    img.src=slider_img[index];
})


let lines=document.querySelectorAll('.line');





for (let line of lines) {
     
    line.onclick=function(){ 
        img.id++;
        
        index++;
 
             if(line.id==img.id){
                img.src=slider_img[index];
             }
         
    }
}

function AutoPlay() {
    index++;
    
    if(index>slider_img.length-1){
           index=0;
    }

   img.src=slider_img[index];
}

setInterval(() => {
    AutoPlay();
}, 5000);





