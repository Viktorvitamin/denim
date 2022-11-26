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

