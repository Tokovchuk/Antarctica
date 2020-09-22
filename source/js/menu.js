'use strict';

var header = document.querySelector('.header');
var nav = document.querySelector('.nav');
var menu = document.querySelector('.header__menu');
var button = document.querySelector('.header__button');
var logo = document.querySelector('.logo');

header.classList.remove('header--nojs');
nav.classList.remove('nav--nojs');
menu.classList.remove('header__menu--nojs');
menu.classList.remove('container--nojs');
logo.classList.remove('logo--nojs');
logo.classList.remove('logo--dark');
button.classList.remove('header__button--nojs');
button.classList.remove('header__button--close');

button.addEventListener('click', function () {
  if (button.classList.contains('header__button--close')) {
    button.classList.remove('header__button--close');
    button.classList.add('header__button--on');
    logo.classList.remove('logo--dark');
    nav.classList.remove('nav--open');
    menu.classList.remove('header__menu--open');
    header.classList.remove('header--open');
  } else {
    button.classList.add('header__button--close');
    button.classList.remove('header__button--on');
    logo.classList.add('logo--dark');
    nav.classList.add('nav--open');
    menu.classList.add('header__menu--open');
    header.classList.add('header--open');
  }
});
