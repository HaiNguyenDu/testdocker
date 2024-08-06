//slider
let teleporter = 0
function slider(){
    let slider = document.querySelector(".slider")
    document.querySelector("#left").addEventListener("click",()=>{
        if(teleporter==0)
        {

        }
        else
        {
        teleporter--
        }
        tele(teleporter)
    })
    document.querySelector("#right").addEventListener("click",()=>{
        if(teleporter==3)
        {

        }
        else
        {
        teleporter++
       
        }
        tele(teleporter)
    })
}
function tele(x){
    let slider = document.querySelector(".slider")
    let width = slider.querySelector("img").offsetWidth
    slider.style.transform = `translateX(-${65*x}vw)`
}
slider()