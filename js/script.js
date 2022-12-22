
/* MENU */
const links = document.querySelectorAll('.nav__link');
const light = document.querySelector('.nav__light');

function moveLight({offsetLeft, offsetWidth}) {
    light.style.left = `${offsetLeft - offsetWidth/2}px`
}

function activeLink(linkActive){
    links.forEach(link => {
        link.classList.remove('active');
        linkActive.classList.add('active');
    })
}

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        moveLight(event.target);
        activeLink(link);
    })
})

/* SLIDES */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}