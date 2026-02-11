const cities = document.querySelector('#cities')
cities.addEventListener('change', () => {
    const selected = cities.value;

    const demo = document.querySelector('#demo')
    demo.textContent = selected

    const image = document.querySelector('#image')
    const img = document.createElement('img')
    img.src = `./img/${selected}.jpg`
    img.alt=selected
    img.title = selected


    image.replaceChildren(img)
})