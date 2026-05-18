const API_URL= 'https://nodejs118.dszcbaross.edu.hu/api/auth'

const regName = document.querySelector('#regName')
const regEmail = document.querySelector('#regEmail')
const regPsw = document.querySelector('#regPsw')
const regBtn = document.querySelector('#regBtn')


regBtn.addEventListener('click', register)

async function register(){
    const name = regName.value
    const email = regEmail.value
    const psw = regPsw.value

    //console.log(name,email,psw)

    try {
        const response = await fetch(`${API_URL}/register`, {
           method: 'POST',
           headers: {
           'content-type': 'application/json'
           } ,
            body: JSON.stringify({name, email, psw})
            })

            const data = await response.json()
            console.log(data)

            if (!response.ok) {
                alert("hiba")
            }

            const registerMessage = document.querySelector('#registerMessage')
            registerMessage.textContent = data.message
    } catch (error) {
        console.log(`No bunenos dias le serveros ${error}`);
        
    }
}