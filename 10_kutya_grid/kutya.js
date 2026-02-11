const cards = document.querySelector("#cards")

const lista_url = "src/kepek.txt"
const img_mappa = "img/"

window.addEventListener('DOMContentLoaded', loadCards)

async function loadCards()
{
    try {
        const res = await fetch(lista_url)

        if (!res.ok ) {
            alert("fájl = nuku")
        }
        console.log(res)
        const text = await res.text()
        const files = text.split('\n').map(sor => sor.trim()).filter(sor => sor.length > 0)
        
        if (files.length === 0) {
            return alert("THERE IS NOTHIN")
        }

        cards.innerHTML= ""

       files.forEach((fileName, index) => {
        cards.appendChild(createCard(fileName, index))
    })

    } catch (error) {
        alert(error)
    }
}

function createCard(fileName, index)
{
    const card = document.createElement('div')
    card.className = 'card'
    const img = document.createElement('img')
    img.src = `${img_mappa}${fileName}`
    img.alt=`kutya${index+1}`

    const content = document.createElement("div")
    content.className= "content"

    const h3 =  document.createElement("h3")
    h3.textContent = `Kártya #${index}`
    const p = document.createElement("p")
    p.textContent = `${fileName}`

    content.append(h3,p)
    card.append(img,content)
    return card

    
}