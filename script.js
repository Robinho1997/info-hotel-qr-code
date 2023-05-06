const toggleRestaurantsBtn = document.getElementById("toggle-restaurants-btn");
const toggleIconRestaurant = document.getElementById("toggle-icon-restaurants");
const restaurantList = document.getElementById("restaurant-list");
const toggleAusflugszieleBtn = document.getElementById(
  "toggle-ausflugsziele-btn"
);
const toggleIconAusflugsziele = document.getElementById(
  "toggle-icon-ausflugsziele"
);
const ausflugsZieleList = document.getElementById("ausflugsziele-list");

const switchLanguageBtn = document.getElementById("switch-language-btn");
const langGerman = document.querySelectorAll('[lang="de"]');
const langEnglish = document.querySelectorAll('[lang="en"]');
let isGerman = false;



toggleRestaurantsBtn.addEventListener("click", () =>
  toggleRestaurants(restaurantList, toggleIconRestaurant)
);
toggleAusflugszieleBtn.addEventListener("click", () =>
  toggleRestaurants(ausflugsZieleList, toggleIconAusflugsziele)
);
switchLanguageBtn.addEventListener("click", toggleLanguage)

function toggleRestaurants(list, icon) {
  if (list.style.display === "none") {
    list.style.display = "block";
    icon.innerHTML = "expand_less";
  } else {
    list.style.display = "none";
    icon.innerHTML = "expand_more";
  }
}
toggleLanguage()
function toggleLanguage() {
    if(isGerman) {
        langGerman.forEach(el => el.style.display = "none");
        langEnglish.forEach(el => el.style.display = "inline");
        document.querySelector("html").style.display = "block"
        isGerman = false;
    } else {
        langGerman.forEach(el => el.style.display = "inline");
        langEnglish.forEach(el => el.style.display = "none");
        document.querySelector("html").style.display = "block"
        isGerman = true;
    }
}
