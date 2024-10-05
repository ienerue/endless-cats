async function getCats() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    const cats = await response.json()
    console.log(cats)
}

getCats()