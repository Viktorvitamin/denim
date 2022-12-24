const bigImg = document.querySelector(".bigImg");
const prevs = document.querySelectorAll(".prev");
const reset = document.querySelector(".reset");

let baseSrc = bigImg.getAttribute('src');
reset.addEventListener("click", function() {
  bigImg.src = baseSrc;
})

prevs.forEach(function(element) {  
  element.addEventListener("click", function() {
    bigImg.src = element.getAttribute("src")
  });
  
});




let r2d2 = 'коля';
const blabla = 'игорь';

console.log(r2d2);
r2d2 = 5;
console.log(r2d2);
var paha = '';
paha = 5;
var paha = 10;
let r2d2 = 11;







