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
// Start Skills
function Skills(){
    let skill = document.getElementsByClassName("gray")
    let lab = document.getElementsByClassName("lab")

    skill[0].style.width = "95%"
    skill[1].style.width = "93%"
    skill[2].style.width = "85%"
    skill[3].style.width = "87%"
    
    lab[0].innerHTML = "95%" + "<div class='triangle'></div>"
    lab[1].innerHTML = "93%" + "<div class='triangle'></div>"
    lab[2].innerHTML = "85%" + "<div class='triangle'></div>"
    lab[3].innerHTML = "87%" + "<div class='triangle'></div>"

    lab[0].style.right = "1%"
    lab[1].style.right = "3%"
    lab[2].style.right = "11%"
    lab[3].style.right = "9%"

}

Skills();
// End Skills
