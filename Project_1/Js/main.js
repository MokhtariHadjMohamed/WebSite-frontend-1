// Start menu
function search(){
    let search = document.getElementById()
    
}
// End menu
// Start Header
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n){
    let img = document.getElementsByClassName("image");
    let dot = document.getElementsByClassName("dot");
    for (i = 0 ; i < img.length ;i++){
        img[i].style.display = "none"
        dot[i].style.backgroundColor = "transparent"
    }

    if (n > img.length) 
    {
        slideIndex = 1
    }

    if (n < 1) 
    {
        slideIndex = img.length
    }

    img[slideIndex - 1].style.display = "block"
    dot[slideIndex - 1].style.backgroundColor = "#00c7fc"
   
}

plusSlides(slideIndex)

setInterval(function(){
    plusSlides(1);
},6000)
// End Header
// Start testimonal
let testimonal_val = 1;


function plusTestimonal(n) {
    testimonal(testimonal_val += n);
  }
  

function testimonal(n){
    let t = document.getElementsByClassName("testimonalBox");
    let dotabout = document.getElementsByClassName("dotabout");
    for(i = 0; i < t.length; i++){
        t[i].style.display = "none"
        if(i < 3){
            dotabout[i].style.backgroundColor = "transparent"
        }
    }

    if (n > t.length) 
    {
        testimonal_val = 1
    }

    if (n < 1) 
    {
        testimonal_val = t.length
    }

    t[testimonal_val - 1].style.display = "block"
    dotabout[testimonal_val - 1].style.backgroundColor = "#00c7fc"
}

plusTestimonal(testimonal_val)

setInterval(function(){
    plusTestimonal(1);
},6000)
// End testimonal
