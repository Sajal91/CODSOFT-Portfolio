let heading = document.querySelector('.heading-3 span');
let headingStr = heading.innerText;
heading.innerHTML = "";
let timeCount = 0;


for(let i = 0; i < headingStr.length; i++) {
    setTimeout(() => {
        heading.innerHTML = heading.innerHTML + headingStr[i];
    }, timeCount+=100);
}

let navBtns = document.querySelectorAll('ul .nav-item a');
console.dir(navBtns);
for(let navBtn of navBtns) {
    // navBtn.addEventListener('mousedown',(event)=>{
    //     event.preventDefault();
    //     navBtn.style.color = '#0D6EFD';
    // });
    // navBtn.addEventListener('mouseup',(event)=>{
    //     event.preventDefault();
    //     navBtn.style.color = 'white';
    // });
}