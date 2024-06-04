"use strict";
new WOW().init();

$(document).ready(function () {
  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 2,
    dots: true,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".houses-slider").slick({
    infinite: true,
    slidesToShow: 3,
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/icons/right.svg" alt=""></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/icons/left.svg" alt=""></button>',

    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".slider-review").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1036,
        settings: {
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });
});

const tabTitle = document.querySelectorAll(".tabs-title"),
  tabSection = document.querySelectorAll(".houses-slider"),
  tabParent = document.querySelector(".recommend__container");

function hideActive() {
  tabTitle.forEach(function (item) {
    item.classList.remove("tabs-title_active");
  });

  tabSection.forEach(function (item) {
    item.style.display = "none";
  });
}

hideActive();

function showeActive(i = 0) {
  tabTitle[i].classList.add("tabs-title_active");
  tabSection[i].style.display = "block";
}
showeActive();

tabParent.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("tabs-title")) {
    tabTitle.forEach(function (item, i) {
      if (event.target == item) {
        hideActive();
        showeActive(i);
      }
    });
  }
});

/* =========================================================== БУРГЕР МЕНЮ */

const burger = document.querySelector(".humburger"),
  hideMenu = document.querySelector(".menu"), //Блок который скрывается
  menuLink = document.querySelectorAll(".menu__link"), //Класс элементов меню, по которым кликаем
  body = document.querySelector("body");

burger.addEventListener("click", function () {
  hideMenu.classList.toggle("menu_active"); //Класс активности
  burger.classList.toggle("humburger_active");
  body.classList.toggle("body-hidden");
});

menuLink.forEach(function (item) {
  item.addEventListener("click", function (e) {
    hideMenu.classList.toggle("menu_active"); //Класс активности
    burger.classList.toggle("humburger_active");
  });
});
