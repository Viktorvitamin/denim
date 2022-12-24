const arrayNum = 15;
const items = document.querySelectorAll(".catalogItem");
const currentItems = document.querySelector(".currentItems");
const allItems = document.querySelector(".allItems");
const itemFill = document.querySelector(".itemFill");

allItems.textContent = arrayNum;

if (items) {
    currentItems.textContent = items.length; 
    const percent = Math.round((items.length / arrayNum) * 100);
    itemFill.style.width = percent + "%";
}

$(document).ready(function() {
    $('.filter__select').click(function(events) {
        $(this).toggleClass('filter__active');
    })
    $('.filter__select').blur(function(events) {
        $(this).removeClass('filter__active');
    })
})
// const element = document.querySelector('.r2d2');
// if(element != null){
//     console.log('blaaa');
//     element.classList.add('active');
// }

// console.log('privet');

// $(document).ready(function() {
//    const element1 =  $('.r2d2');
//    element1.addClass('active');
//    console.log('privet');
    
// })
