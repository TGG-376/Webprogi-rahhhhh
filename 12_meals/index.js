
const tarolo = document.querySelector('#tarolo');
const fetchButton = document.querySelector('#fetch');

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

fetchButton.addEventListener('click', loadCards);

async function loadCards() {
    try {
        const res = await fetch(URL);
        if(res === null) {
            return "Loading...."
        }
        const data = await res.json()
        const chars = data.categories;
        //console.log(chars)
        displayCharacters(chars);


    } catch (error) {
        alert(error)
    }
}

function displayCharacters(chars){
    if(!chars) return null
    chars.forEach(char => {
        console.log(char);

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = char.strCategoryThumb; 
        img.alt = char.strCategory;

        const name = document.createElement('div');
        name.textContent = "Kategoria: "
        name.textContent += char.strCategory;
        name.className = 'Name';

        card.append(img, name);

        tarolo.append(card)
    });
}
