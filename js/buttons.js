// Button listener
let hamBtn = () => { 
    let btn = document.getElementsByClassName("hamburguer-btn");
    btn.addEventListener("click", showUpMenu())
}
//display menu
let menu_status = false;
let showUpMenu = () => {
    let menu = document.getElementsByClassName("nav-menu")[0];
    if (menu_status == false) {
        menu.style.display = "block";  
        menu_status = true;
    }
    else {
        menu.style.display = "none"; 
        menu_status = false;
    }
}

//change language
let languageStatus = false;

let changeLanguage = () => {
    let spanish = document.getElementsByClassName("spanish-text")
    let english = document.getElementsByClassName("english-text")
    if (languageStatus == false) {
        for (let i = 0; i < spanish.length; i++) {
            spanish[i].style.display = "block"
            english[i].style.display = "none"
        }
        languageStatus = true;
    }
    else {
        for (let i = 0; i < english.length; i++) {
            spanish[i].style.display = "none"
            english[i].style.display = "block"
        }
        languageStatus = false;
    }
}
let lightmood = false
// Change light mode
let setLight = () => {
    let body_l = document.getElementsByTagName("body");
    let inputs = document.getElementsByTagName("input");
    let text = document.getElementsByClassName("text-color-sw")
    let btnNav = document.getElementsByClassName("hamburguer-btn");
    let lanBtn = document.getElementsByClassName("language-icon")
    let scrollBtn = document.getElementsByClassName("scroll-btn")
    let beforeLine = document.getElementsByClassName("timeline-items")
    let toggle = document.getElementsByClassName("toggle-btn")
    if (!lightmood) {
        body_l[0].style.backgroundColor = "#FFFFFF"
        body_l[0].style.color = "#000000"
        btnNav[0].src = "assets/icon/hamburguerBlack.svg"
        lanBtn[0].src = "assets/icon/languageBlack.svg"
        scrollBtn[0].src = "assets/icon/scrollBlack.svg"
        toggle[0].src = "assets/icon/toggleBlack.svg"
        for (let i of text){
            console.log("color");
            i.style.color = SVGFILES[0];
        }
        for (let i of beforeLine) {
            i.style.setProperty("--color", "#000")
        }
        for (let i of inputs) {
            i.style.backgroundColor = "#fff"
            i.style.color = "#000"
        }
        lightmood = !lightmood;
    }
    else {
        
        body_l[0].style.backgroundColor = "#000000"
        body_l[0].style.color = "#FFFFFF"
        btnNav[0].src = "assets/icon/hamburguer.svg"
        lanBtn[0].src = "assets/icon/language.svg"
        scrollBtn[0].src = "assets/icon/scroll.svg"
        toggle[0].src = "assets/icon/toggle.svg"
        for (let i of text){
            console.log("color");
            i.style.color = "#FFFFFF"
        }
        for (let i of beforeLine) {
            i.style.setProperty("--color", "#fff")
        }
        for (let i of inputs) {
            i.style.backgroundColor = "#000"
            i.style.color = "#fff"
        }
        lightmood = !lightmood;
    }
}