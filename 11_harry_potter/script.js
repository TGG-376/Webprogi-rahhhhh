const characters = document.querySelector('#characters')

const hp_url = "https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json"

window.addEventListener('DOMContentLoaded', fetchCharacters)

async function fetchCharacters()
{
    try {
        const res = await fetch(hp_url)
    const chars = await res.json()

        displayCharacters(chars)

    } catch (error) {
        alert(error)
    }
}

function displayCharacters(chars){

    chars.forEach(char => {
        characters.appendChild(CharCards(char))
    });
}

function CharCards(char){
    const card = document.createElement('div');
    card.classList.add('card'); 

    const img = document.createElement('img');           //Ötletem sincs miért nem jelenik meg a kép. Bár mikor magára a kép linkére rákeresek azt dobja fel az oldal hogy "There's nothing here, yet" szóval GONDOLOM nem tőlem függő hiba.
    img.src = fixImgUrl(char.image);
    img.alt = char.name;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const name = document.createElement('h3');
    name.textContent = char.name;

    const houseP = document.createElement('p');
    houseP.textContent = "Ház: ";
    const houseValue = document.createElement('span');
    houseValue.textContent = char.house || 'Ismeretlen';
    houseP.append( houseValue);

    const birthP = document.createElement('p');
    birthP.textContent = "Születési év: ";
    const birthValue = document.createElement('span');
    birthValue.textContent = char.yearOfBirth || 'Ismeretlen';
    birthP.append(birthValue);

    const actorP = document.createElement('p');
    actorP.textContent = "Színész: ";
    const actorValue = document.createElement('span');
    actorValue.textContent = char.actor || 'Ismeretlen';
    actorP.append(actorValue);

    cardContent.append(name, houseP, birthP, actorP);
    card.append(img, cardContent);

    return card
}

function fixImgUrl(uri) {
    if(!uri) return null;

    return uri.replace("http://", "https://").replace("herokuapp.com", "onrender.com")
}