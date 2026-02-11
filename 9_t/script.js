const tarolo = document.querySelector('.tarolo')
const kupak = document.querySelector('#kupak')
const szoveg = document.querySelector('#szoveg')

const uzik = []
let ZarvaE =  true

window.addEventListener("DOMContentLoaded", async () =>{
    try {
        const response = await fetch('./uzik.csv')
        const text = await response.text()
        const sorok = text.split('\n').map(sor => sor.trim()).filter(sor => sor !== '')

        sorok.forEach(sor => uzik.push(sor))
    } catch (error) {
        console.log(error)
    }
})

tarolo.addEventListener('click', () => {
    if (ZarvaE) {
        szoveg.textContent="";
        tarolo.classList.remove('zar')
        tarolo.classList.add('nyit')
        ZarvaE=false;


       setTimeout(() => {
        if (!ZarvaE && uzik.length > 0) {
            szoveg.textContent = uzik[Math.floor(Math.random()*uzik.length)]
        }
       }, 100);
    }

    else {
        szoveg.textContent=""
        tarolo.classList.remove('nyit')
        tarolo.classList.add('zar')
        ZarvaE=true;
    }
})