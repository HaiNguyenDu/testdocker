//listroom
let line= 0
function choicefloor(){
    let floors= document.querySelectorAll(".main_listroom_header_item")
    floors.forEach((floor,x)=>{
        floor.addEventListener("click",()=>{
            document.querySelector(`.main_listroom_items_${line+1}`).style.display = `none`
            document.querySelector(`.main_listroom_items_${x+1}`).style.display = `flex`
            floors[line].classList.remove('choice')
            floor.classList.add('choice')
            line = x
        })
    })
}
//chon tang
choicefloor()
//buttoncheckout
function checkout(floors,x,i)
{
        let buttoncheckout = floors.querySelectorAll(".main_listroom_item_button_checkout")
        let status = floors.querySelectorAll(".main_listroom_item_status")
        let confirm = document.querySelector(".confirm")
        let background = document.querySelector(".background")
        let room =floors.querySelectorAll(".main_listroom_item")
        let checkoutfill = ` <div class="main_listroom_item_header">
        <div class="main_listroom_item_header_text">Phòng ${i+1}01</div>
        <div class="main_listroom_item_header_icon" >
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
    <div class="main_listroom_item_Name">Tên Khách Hàng</div>
    <div class="CCCD">CCCD:</div>
    <div class="main_listroom_item_line"></div>
    <div class="main_listroom_item_status">Phòng Sẵn Sàng</div>
    
    <div class="main_listroom_item_check">
        <div class="main_listroom_item_checkin">
        <i class="fa-regular fa-clock"></i>
            Ngày nhận phòng: 
        </div>
        <div class="main_listroom_item_checkout">
        <i class="fa-regular fa-clock"></i>
                Ngày trả phòng: 
        </div>
    </div>
    <div class="main_listroom_item_timecheckin">Thời gian nhận phòng :</div>
    <div class="main_listroom_item_button">
        <div class="main_listroom_item_button_checkin">Nhận Phòng</div>
        <div class="main_listroom_item_button_checkout">Trả Phòng</div>

    </div>`
        buttoncheckout[x].addEventListener("click",()=>{
                confirm.style.display =`flex`
                background.style.display =`flex`
                confirm.querySelector('.confirm_text').innerHTML="Xác Nhận Đã Thanh Toán"
                document.querySelector(".confirm_button_ok").addEventListener("click",()=>{
                    status[x].innerHTML = "Phòng Sẵn Sàng" 
                    confirm.style.display =`none`
                    background.style.display =`none`
                    room[x].innerHTML=checkoutfill
                    floors.querySelectorAll(".main_listroom_item_button_checkout")[x].style.opacity=`0`

                    checkin()
                    xemthongtinphong()
                })
                document.querySelector(".confirm_button_cancel").addEventListener('click',()=>{
                    confirm.style.display =`none`
                    background.style.display =`none`
                })
                

            })
            
     }
       


    


//buutoncheckin
function checkin()
{
    for(let i =0;i<4;i++)
    {  
        //button tra phong
        let floors= document.querySelector(`.main_listroom_items_${i+1}`)
        let buttoncheckin = floors.querySelectorAll(".main_listroom_item_button_checkin")
        let confirm = document.querySelector(".confirm")
        let background = document.querySelector(".background")

   
        buttoncheckin.forEach((bci,x)=>{
            bci.addEventListener("click",()=>{
                confirm.style.display =`flex`
                background.style.display =`flex`
                confirm.querySelector('.confirm_text').innerHTML="Xac Nhận Nhận Phòng"
                document.querySelector(".confirm_button_ok").addEventListener("click",()=>{
                    floors.querySelectorAll(".main_listroom_item_status")[x].innerHTML = `Đã Nhận Phòng` 
                    confirm.style.display =`none`
                    background.style.display =`none`
                    floors.querySelectorAll(".main_listroom_item_button_checkin")[x].style.opacity = `0`
                    floors.querySelectorAll(".main_listroom_item_button_checkout")[x].style.opacity=`1`
                    checkout(floors,x,i)
                    let time = getime()
                    floors.querySelectorAll(".main_listroom_item_timecheckin")[x].innerHTML = "Thời gian nhận phòng : "+ time
                    
                })
                document.querySelector(".confirm_button_cancel").addEventListener('click',()=>{
                    confirm.style.display =`none`
                    background.style.display =`none`
                })
                

            })
        })
       
}
}

checkin()
//lay time
function getime()
{
    let timenow = new Date()
    console.log(timenow.getHours()+"h, ")
    console.log(timenow.getMinutes()+"p")
    return timenow.getHours()+"h"+timenow.getMinutes()+"p"
}
//gansukienbuttonlistroom
function eventlistroom()
{
    document.querySelector(".listroom").addEventListener("click",()=>{
        document.querySelector(".main_listroom").style.display = `flex`
        document.querySelector(".main_QLTP").style.display =`none`
        document.querySelector(".main_book").style.display = `none`
    })
}
eventlistroom()
////gansukienbuttonbookroom
function eventbookroom()
{
    document.querySelector(".book").addEventListener("click",()=>{
        document.querySelector(".main_listroom").style.display = `none`
        document.querySelector(".main_QLTP").style.display =`none`
        document.querySelector(".main_book").style.display = `flex`
    })
}
//
eventbookroom()
function eventquanlytraroom()
{
    document.querySelector(".QLTP").addEventListener("click",()=>{
        document.querySelector(".main_listroom").style.display = `none`
        document.querySelector(".main_QLTP").style.display =`block`
        document.querySelector(".main_book").style.display = `none`
    })
}
eventquanlytraroom()
//
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
//addsukienxemthongtin
function xemthongtinphong()
{   
    let pentosquare = document.querySelectorAll(".fa-pen-to-square")
    let listroom = document.querySelectorAll(".main_listroom_item")
    let ifmroomheader = document.querySelector(".ifmroom_header")

    pentosquare.forEach((x,i)=>{
        x.addEventListener("click",()=>{
            let textheader = listroom[i].querySelector(".main_listroom_item_header_text").textContent
            console.log(textheader)
            ifmroomheader.innerHTML = `${textheader}`
            document.querySelector(".ifmroom").style.display =`block`
            document.querySelector(".background").style.display =`flex`
        })
    })

}

xemthongtinphong()
//addsukienbutton cua xem phong
function buttonsave()
{
    document.querySelector("#save").addEventListener("click",()=>{
        //them su kien buttonsave
    })
}
function buttoncancel(){
    document.querySelector("#cancel").addEventListener("click",()=>{
        document.querySelector(".ifmroom").style.display = `none`
        document.querySelector(".background").style.display =`none`
    })
}
buttoncancel()
