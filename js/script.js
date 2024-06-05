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

/* =========================================================== `burger menu */

const burger = document.querySelector(".humburger"),
  hideMenu = document.querySelector(".menu"), //block that hides
  menuLink = document.querySelectorAll(".menu__link"), //element class on which we click
  body = document.querySelector("body");

burger.addEventListener("click", function () {
  hideMenu.classList.toggle("menu_active");
  burger.classList.toggle("humburger_active");
  body.classList.toggle("body-hidden");
});

menuLink.forEach(function (item) {
  item.addEventListener("click", function (e) {
    hideMenu.classList.toggle("menu_active");
    burger.classList.toggle("humburger_active");
  });
});

//
// import "./style.css";
function hideCookieBanner() {
  var banner = document.getElementById("cookieConsentBanner");
  banner.style.display = "none";
  localStorage.setItem("cookieBannerDisplayed", "true");
}

window.onload = function () {
  if (localStorage.getItem("cookieBannerDisplayed") !== "true") {
    var banner = document.getElementById("cookieConsentBanner");
    banner.style.display = "flex"; // Change this to 'flex' to make it visible again
  }
};

//click event on this link and load more articles
document.getElementById("loadMore").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // AJAX request to load more articles
  fetch(this.getAttribute("href"))
    .then((response) => response.json()) // Convert the fetched data into JSON
    .then((data) => {
      data.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `<h4>${article.title}</h4><p>${article.summary}</p>`;
        document
          .getElementById("articlesContainer")
          .appendChild(articleElement);
      });
    })
    .catch((error) => console.error("Error loading more articles:", error));
});

//onclick change of small article to big one
// Function to update the featured article
function updateFeaturedArticle(
  imageSrc,
  authorImgSrc,
  authorName,
  title,
  description
) {
  const bigArticleImg = document.querySelector(
    ".cart-mini_big-type .cart-mini__img img"
  );
  const bigArticleAuthorImg = document.querySelector(
    ".cart-mini_big-type .cart-mini__name-info img"
  );
  const bigArticleAuthorName = document.querySelector(
    ".cart-mini_big-type .cart-mini__name"
  );
  const bigArticleTitle = document.querySelector(
    ".cart-mini_big-type .cart-mini__title"
  );
  const bigArticleDescription = document.querySelector(
    ".cart-mini_big-type .cart-mini__descr"
  );

  bigArticleImg.src = imageSrc;
  bigArticleAuthorImg.src = authorImgSrc;
  bigArticleAuthorName.textContent = authorName;
  bigArticleTitle.textContent = title;
  bigArticleDescription.textContent = description;
}

// Adding event listeners to all small article cards
document.querySelectorAll(".artikel-wrapper__mini-cart").forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();
    const imgSrc = this.querySelector(".cart-mini__img img").src;
    const authorImgSrc = this.querySelector(".cart-mini__name-info img").src;
    const authorName = this.querySelector(".cart-mini__name").textContent;
    const title = this.querySelector(".cart-mini__title").textContent;
    const description = this.querySelector(".cart-mini__descr")
      ? this.querySelector(".cart-mini__descr").textContent
      : "";

    updateFeaturedArticle(imgSrc, authorImgSrc, authorName, title, description);
  });
});

//form behaviour
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Assuming validation is passed
    const formData = new FormData(this);
    console.log("Form data:", ...formData.entries());

    // Here you would typically send the data to a server
    // Example: axios.post('/api/submit-form', formData)
  });
