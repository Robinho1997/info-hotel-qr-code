const toggleRestaurantsBtn = document.getElementById("toggle-restaurants-btn");
const toggleAusflugszieleBtn = document.getElementById("toggle-ausflugsziele-btn")
const toggleIconRestaurant = document.getElementById("toggle-icon-restaurants")
const toggleIconAusflugsziele = document.getElementById("toggle-icon-ausflugsziele")
const restaurantList = document.getElementById("restaurant-list");
const ausflugsZieleList = document.getElementById("ausflugsziele-list")

toggleRestaurantsBtn.addEventListener("click",()=>toggleRestaurants(restaurantList,toggleIconRestaurant))
toggleAusflugszieleBtn.addEventListener("click",()=>toggleRestaurants(ausflugsZieleList,toggleIconAusflugsziele))

function toggleRestaurants(list,icon) {
    if (list.style.display === "none") {
        list.style.display = "block"
        icon.innerHTML = "expand_less"
    } else {
        list.style.display = "none"
        icon.innerHTML = "expand_more"
    }
}
