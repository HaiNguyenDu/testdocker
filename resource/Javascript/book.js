let datedayleft = document.querySelector('.date_left ').querySelector('.numbers')
let datedayright = document.querySelector('.date_right ').querySelector('.numbers')

function thang5()
{
    datedayleft.innerHTML+=`<div class="date_numbers_items" style="opacity:0;"></div>`
    datedayleft.innerHTML+=`<div class="date_numbers_items" style="opacity:0;"></div>`
for(let i =1;i<=31;i++)
{
    datedayleft.innerHTML +=` <div class="date_numbers_items"><div class="numbers_day">${i}</div> <div class="money">5.431.000 đ</div> </div>`
}
}
function thang6()
{
    datedayright.innerHTML+=`<div class="date_numbers_items" style="opacity:0;"></div> `
    datedayright.innerHTML+=`<div class="date_numbers_items" style="opacity:0;"></div>`
    datedayright.innerHTML+=`<div class="date_numbers_items" style="opacity:0;"></div>`
    datedayright.innerHTML+=`<div class="date_numbers_items" style="opacity:0;"></div>`
    datedayright.innerHTML+=`<div class="date_numbers_items" style="opacity:0;"></div>`
    for(let i =1;i<31;i++)
{
    datedayright.innerHTML +=` <div class="date_numbers_items"><div class="numbers_day">${i}</div><div class="money">2.310.000 đ</div> </div>`
}
}
thang5();
thang6();
// //click day in lich checkin
let daycheckin = {
    day:null,
    month:null,
    year:null,
}
let daycheckout = {
    day:null,
    month:null,
    year:null,
}

let solanclick = 0;
function pickday()
{
    let daycheckinn=null;
    let days = document.querySelectorAll('.date_numbers_items')
    days.forEach((day,x)=>{
        day.addEventListener('click',()=>{
            solanclick++
            let daychoice= day.querySelector('.numbers_day')
            console.log(daychoice)
            if(solanclick==1)
            {
                daycheckin.day= daychoice.innerText
                day.classList.add('daychoice')
                daycheckinn=x
            }
            else if(solanclick==2)
            {
                daycheckout.day = daychoice.innerText
                let pushday= document.querySelectorAll('.day')
                pushday[0].innerHTML=daycheckin.day
                pushday[1].innerHTML=daycheckout.day
                days[daycheckinn].classList.remove('daychoice')
                //viet ham kiem tra ngay thang nao lon hon o day
                daycheckinn=null
                solanclick=0
            }
            
        })
    })
}
pickday()
//sukiennut arrow

function arrow(){
    let arrow = document.querySelector(".arrow")
    let peoplepicker = document.querySelector(".peoplepicker")
    let submit = document.querySelector('.buttonsubmit')
    arrow.addEventListener('click',()=>{
        peoplepicker.style.display =`flex`
        submit.style.display=`flex`
    })
}
function exitbutton(){
    let exit = document.querySelector(".exitbutton")
    let peoplepicker = document.querySelector(".peoplepicker")
    let submit = document.querySelector('.buttonsubmit')
    exit.addEventListener("click",()=>{
        peoplepicker.style.display =`none`
        submit.style.display=`none`
    })
}
exitbutton()
arrow()
//sukienchangeadult
let  countpeople=[1,2,0]
function change(element,elcount)
{
    let elmain=document.querySelector(element)
    let plus = elmain.querySelector(".plus")
    let minus = elmain.querySelector(".minus")
    let count = elmain.querySelector(".count")
    plus.addEventListener("click",()=>{
        //checksonguoitoida
        let maxpeople = countpeople[0]*4 - countpeople[1]-countpeople[2] 
        if(maxpeople>0||elcount==0)
        {
        countpeople[elcount]++
        count.innerHTML = countpeople[elcount]
        }
       
        else{
            alert("Số Người Đã Tối Đa cho Số Phòng Bạn Đặt")
        }
    })
    minus.addEventListener("click",()=>{
        let check = ((countpeople[0]-1)*4<(countpeople[1]+countpeople[2])) ? true:false
       if(check && elcount==0)
        {
            alert("Số Người Đã Tối Đa cho Số Phòng Bạn Đặt")
        }
        else if(countpeople[elcount]>1)
        {
            countpeople[elcount]--
            count.innerHTML=countpeople[elcount]
        }
        else if(elcount==2 && countpeople[elcount]>=1)
        {
            countpeople[elcount]--
            count.innerHTML=countpeople[elcount]
        }
    })   
}   
change(".changeadult",1)
change(".changeroom",0)
change(".changechild",2)
//addsukietbuttonxacnhan
function buttonsubmit(){
    let buttonsubmit = document.querySelector(".buttonsubmit")
    let room = document.querySelector(".room").querySelector(".room_item")
    let adult = document.querySelector(".adult").querySelector(".adult_item")
    let child = document.querySelector(".child").querySelector(".child_item")
    let peoplepicker = document.querySelector(".peoplepicker")
    buttonsubmit.addEventListener("click",()=>{
        room.innerHTML = countpeople[0]
        adult.innerHTML = countpeople[1]
        child.innerHTML = countpeople[2]
        peoplepicker.style.display =`none`
        buttonsubmit.style.display=`none`
    })
}
buttonsubmit()
//add su kien click tim kiem
function buttonfind(){
    document.querySelector(".buttonfind").addEventListener("click",()=>{
        document.querySelector(".find").style.display =`flex`
        document.querySelector(".date").style.display =`none`
    })
}
buttonfind()