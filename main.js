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
