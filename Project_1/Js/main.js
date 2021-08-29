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
