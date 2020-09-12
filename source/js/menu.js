'use strict';

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.header__menu');
const button = document.querySelector('.header__button');
const logo = document.querySelector('.logo');

header.classList.remove('header--nojs');
nav.classList.remove('nav--nojs');
menu.classList.remove('header__menu--nojs');
menu.classList.remove('container--nojs');
logo.classList.remove('logo--nojs');
logo.classList.remove('logo--dark');
button.classList.remove('header__button--nojs');
button.classList.remove('header__button--close');

console.log ('hekki');

button.addEventListener('click', function() {
  if(button.classList.contains('header__button--close')) {
    button.classList.remove('header__button--close');
    button.classList.add('header__button--open');
    logo.classList.remove('logo--dark');
    nav.classList.remove('nav--open');
    menu.classList.remove('header__menu--open');
    header.classList.remove('header--open');
  } else {
    button.classList.add('header__button--close');
    button.classList.remove('header__button--open');
    logo.classList.add('logo--dark');
    nav.classList.add('nav--open');
    menu.classList.add('header__menu--open');
    header.classList.add('header--open');
  }
});





// const navMain = document.querySelector(".main-nav");
// const navList = document.querySelector(".main-nav__list");
// const headerMenu = document.querySelector(".header__menu");
// const navToggle = document.querySelector(".header__toggle");

// navMain.classList.add("main-nav--closed");
// navMain.classList.remove("main-nav--nojs");
// headerMenu.classList.remove("header__menu--nojs");
// navList.classList.remove("main-nav__list--nojs");
// navToggle.classList.remove("header__toggle--nojs");

// navToggle.addEventListener("click", function() {
//     if (navMain.classList.contains("main-nav--closed")) {
//         navMain.classList.remove("main-nav--closed");
//         navToggle.classList.remove("header__toggle--off");
//         navToggle.classList.add("header__toggle--on");
//     } else {
//         navToggle.classList.remove("header__toggle--on");
//         navMain.classList.add("main-nav--closed");
//         navToggle.classList.add("header__toggle--off");
//     }
// })