import '../../fonts/Euclid/stylesheet.css'
import '../../src/sass/style.scss'
import '../../src/sass/cursor.scss'


import Cursor from "./cursor.js";
// import { gsap } from "gsap";

const body = document.querySelector("body");


const view = document.querySelector('.cursor-media');
const loader = document.querySelector('.loader')

window.onload = () => {
    const cursor = new Cursor(document.querySelector(".cursor"));
    $('html, body').animate({ scrollTop: 0 }, 'normal');

};



window.onload(setTimeout(() => {
    view.classList.remove('s');
    body.classList.remove('body');
}, 13000));
