


//gansukiennutdangnhap
setTimeout(()=>{
    document.querySelector(".login").querySelector('#dky').style.display =`flex`
    document.querySelector(".registedanimate").style.display=`flex`
},2000)
function registed(){
    let registed = document.querySelector(".registed")
    let registedbutton = document.querySelector(".login").querySelector('#dky')
    let loginanimate = document.querySelector(".loginanimate")
    registedbutton.addEventListener("click",()=>{
        registed.style.display = `flex`
        setTimeout(()=>{
            loginanimate.style.display =`flex`
            registedbutton.style.display =`none`
        },2200)
        document.querySelector(".login").style.display =`none`
        document.querySelector(".registedanimate").style=`none`
    })

}
function login(){
    let login = document.querySelector(".login")
    let registedbutton = document.querySelector(".registed").querySelector('#dn')
    let loginanimate = document.querySelector(".registedanimate")
    registedbutton.addEventListener("click",()=>{
        login.style.display = `flex`
        setTimeout(()=>{
            document.querySelector(".login").querySelector('#dky').style.display = `flex`
            loginanimate.style.display =`flex`
        },2200)
        document.querySelector(".registed").style.display =`none`
        document.querySelector(".loginanimate").style.display=`none`
    })

}
registed()
login()
//clicktrang chnu


let logindata = document.querySelector('.login').querySelectorAll('input')


async function postlogin(url,data){
    console.log(data)
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json', 
           
        },
        'body': JSON.stringify(data)
    })
    return response
}


async function getlogin(url){
    const token = localStorage.getItem('token')
    console.log(token)
    const get = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(reponse=>{
        console.log(reponse.status)
    })
    .catch(err=>{
        console.error(err)
    })
}

function gettoken(){
    const buttonsubmmit = document.querySelector('.submit')
    const url = '/login'
    

    buttonsubmmit.addEventListener('click',()=>{
        const input = document.querySelector('.login').querySelectorAll('input')
        const customer = {
            email:input[0].value,
            password:input[1].value
        }
  
        const response = postlogin(url,customer)
        .then(data=>{
            return data.json()
        })
        .then(data=>{
            console.log(data)
            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 1);

            document.cookie=`token = ${data.token};expries = ${expirationDate};path ='/'`
           
            alert('dang nhap thanh cong')
            window.location.href = '/home';
         
        })
        .catch(err=>{
            console.error('kolaydctoken',err)
        })
    })
}
gettoken()