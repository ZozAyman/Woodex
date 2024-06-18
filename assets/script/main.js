const ul = document.querySelector('ul');

document.querySelector('.fa-bars').addEventListener('click', () => {
    ul.classList.toggle('toggle');
})




// filter boxes prodeucts=============
 let switcherList = document.querySelectorAll(".switcher li");
 let boxes = document.querySelectorAll(".box");
 
 switcherList.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageBoxes);
 })

//  remove and add acive class on ul li ===========
function removeActive() {
    switcherList.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
};

//          manage boxes
function manageBoxes() {
    boxes.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display ="block";
    });
};
