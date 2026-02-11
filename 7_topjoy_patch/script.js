const chingchong = [];
const messageBox = document.querySelector("#messageBox")
const messageButton = document.querySelector("#messageButoon")
    

window.addEventListener("DOMContentLoaded", async ()=>{
    try {
        const uzik = await fetch('./uzik.csv')
        uziktext = (await uzik.text()).split('\n').map(sor =>sor.trim() );
        
        uziktext.forEach(uzik =>{
            chingchong.unshift(uzik)
        })
        
        
    
          
    } catch (error) {
        console.error(error)
    }
})

messageButton.addEventListener('click', ()=> {
    messageBox.textContent= chingchong[Math.floor(Math.random()*chingchong.length)]
})