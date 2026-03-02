window.addEventListener('DOMContentLoaded', fetchData)

async function fetchData(){
    try {
        let images = []
        const URL="https://picsum.photos/v2/list"
        const res= await fetch(URL)
        images = await res.json()
        //console.log(images)
        loadAuthors(images)
        LoadImages(images)


    } catch (error) {
        console.log(error);
    }
}

function loadAuthors(images) {
    const szerzok = document.querySelector('#szerzok')
    szerzok.innerHTML = ' '

    const firstopt= document.createElement('option')
    firstopt.value=''
    firstopt.textContent="Összes"

    szerzok.append(firstopt)

    const authors= images.map(x=>x.author)

    const unique = new Set(authors)
    
    unique.forEach((author) => { 
    const option = document.createElement('option')
    option.value=author
    option.text=author


    szerzok.append(option)
    })
    szerzok.addEventListener('change', ()=>authorFilter(images, szerzok))
}

function LoadImages(images){
    const tarolo = document.querySelector('#tarolo')
    tarolo.innerHTML = ' '

    //console.log(images);

    images.forEach((image)=> {
        //console.log(image);
        const card=document.createElement('div')
        //console.log(card);
        card.classList.add('card')

        const cardInner = document.createElement('div')
        cardInner.classList.add('card-inner')
        //console.log(cardInner);

        const img = document.createElement('img')
        img.classList.add('img')
        img.alt = image.author
        img.src=`https://picsum.photos/id/${image.id}/600/400`

        cardInner.append(img)
        card.append(cardInner)
        tarolo.append(card)
    })
    
}

function authorFilter(images, szerzok){
    const value = szerzok.value

    if (!value){
        return LoadImages(filteredList)
    } 

    const filteredList =images.filter((x) => x.author === value)
    LoadImages(filteredList)
}
