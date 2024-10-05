const catContainer = document.getElementById("cat-container")
const limit = 10
let page = 0
// const catNames = [coolcat, kittyprincess, meowzers, lilkitty, pumpkin, aricatto, mr_meowtastic, meowman, kittykat]

async function getCats() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`)
    const cats = await response.json()
    cats.forEach(cat => {
        catContainer.innerHTML += `<img class="cat-img" src=${cat.url}>`
    })
    page++
}

getCats()

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        getCats()
    }
})