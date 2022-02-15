const typedTextSpan = document.querySelector(".typed-text")
const cursorSpan = document.querySelector(".cursor")

const textArray = [" Developer.", " Designer."];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}


function erase() {
    if(charIndex > 3){
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);

    }else{
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});
 

// menu responsive //

addEventListener('DOMContentLoaded', ()=> {
    const btn_menu = document.querySelector('.icon')
    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_btn')
            menu_items.classList.toggle('mostrar')
        })
    }
})
