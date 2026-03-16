window.addEventListener('DOMContentLoaded', fetchData)

async function fetchData() {
    try {

        const URL = "https://akabab.github.io/starwars-api/api/all.json"

        const res = await fetch(URL)

        const images = await res.json()

        loadAuthors(images)
        LoadImages(images)

    }
    catch (error) {
        console.log(error)
    }
}

function loadAuthors(images) {

    const szerzok = document.querySelector('#szerzok')

    const genders = images.map(x => x.gender)

    const unique = [...new Set(genders)]

    unique.forEach((gender) => {

        const option = document.createElement('option')

        option.value = gender
        option.textContent = gender

        szerzok.append(option)

    })

    szerzok.addEventListener('change', () => authorFilter(images, szerzok))

}

function LoadImages(images) {

    const tarolo = document.querySelector('#tarolo')

    tarolo.innerHTML = ''

    images.forEach((image) => {

        const card = document.createElement('div')
        card.classList.add('card')

        const cardInner = document.createElement('div')
        cardInner.classList.add('card-inner')

        const img = document.createElement('img')
        img.classList.add('img')
        img.src = image.image
        img.alt = image.name

        const name = document.createElement('div')
        name.classList.add('author')
        name.textContent = image.name

        cardInner.append(img)
        cardInner.append(name)

        card.append(cardInner)

        tarolo.append(card)

    })

}

function authorFilter(images, szerzok) {

    const value = szerzok.value

    if (!value) {
        LoadImages(images)
        return
    }

    const filteredList = images.filter(x => x.gender === value)

    LoadImages(filteredList)

}