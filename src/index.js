// write your code here
const ramenUrl = "http://localhost:3000/ramens"
const ramenDiv = document.querySelector("#ramen-menu")
const detailDiv = document.querySelector("#ramen-detail")
const ramenForm = document.querySelector("#new-ramen")

fetch(ramenUrl)
.then(resp => resp.json())
.then(ramenData => renderRamens(ramenData))

function renderRamens(ramens) {
    ramens.forEach(appendRamenImage)
}

function appendRamenImage(ramen) {
    const img = document.createElement("img")
        img.src = ramen.image
        img.details = ramen
        img.addEventListener('click', showRamenDetails)
        ramenDiv.append(img)
}
function showRamenDetails(e) {
    let ramen = e.target.details
    const name = document.querySelector(".name")
    const image = document.querySelector(".detail-image")
    const restaurant = document.querySelector(".restaurant")
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")
    
    rating.innerText = ramen.rating
    name.innerText = ramen.name
    image.src = ramen.image
    restaurant.innerText = ramen.restaurant
    comment.innerText = ramen.comment
}

ramenForm.addEventListener("submit", createRamen)

function createRamen(e) {
    e.preventDefault()
    const name = document.querySelector("#new-name").value
    const restaurant = document.querySelector("#new-restaurant").value
    const image = document.querySelector("#new-image").value
    const rating = document.querySelector("#new-rating").value
    const comment = document.querySelector("#new-comment").value

    const ramen = {name, restaurant, image, rating, comment}
    appendRamenImage(ramen)

}