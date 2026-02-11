const  slider = document.querySelectorAll("#mood-slider")
const mood = document.querySelector("#yippee")
slider.addEventListener("input", ()=> 
    {const slidervalue = parseInt(slider.value)+1;
    mood.src = `./img/${slidervalue}.png`})
