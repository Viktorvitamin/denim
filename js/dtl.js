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


const nameStr = "fvdjksfkldsfjkds";
console.log(nameStr);