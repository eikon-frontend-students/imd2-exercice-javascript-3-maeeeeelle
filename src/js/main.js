// var form = document.querySelector("form-input");
// var button = document.querySelector("form-button");
// var articles = document.querySelector("articles-item");

// function filterArticles(event) {
//   event.preventDefault(); // Empêche le rechargement de la page

//   const text = input.value.toLowerCase(); // Récupère la valeur saisie en minuscule

//   // Parcourt tous les articles
//   articles.forEach((article) => {
//     if (article.textContent.toLowerCase().includes(text)) {
//       article.style.display = "list-item"; // Affiche l'article si le texte correspond
//     } else {
//       article.style.display = "none"; // Cache l'article sinon
//     }
//   });
// }

// var input = document.querySelector(".form-input");
// var button = document.querySelector(".form-button");
// var article = document.querySelectorAll(".articles-item");

// button.asddEventListener("click", filterArticles);
// {
//   var text = input.value;
// }

// article.forEach((article) => {
//   if (article.textContent.includes(text)) {
//     article.style.display = "list-item";
//   } else {
//     article.style.display = "none";
//   }
// });
var input = document.querySelector(".form-input");
var button = document.querySelector(".form-button");
var articles = document.querySelectorAll(".articles-item");

function filterArticles(event) {
  var text = input.value;

  articles.forEach((article) => {
    if (article.textContent.includes(text)) {
      article.style.display = "list-item";
    } else {
      article.style.display = "none";
    }
  });
}

button.addEventListener("click", filterArticles);
