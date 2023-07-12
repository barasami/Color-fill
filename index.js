//changing div color

const mydiv=document.querySelector(".divfill")



//getting all classes with btn
const mycolors=document.querySelectorAll(".btn")

//looping through btns

mycolors.forEach((mybtn)=>{
    mybtn.addEventListener('click',(e)=>{
        let colorchange=e.currentTarget.classList
        if(colorchange.contains('black')){
            mydiv.style.backgroundColor="black"
            mydiv.textContent='black'
        }
        else if(colorchange.contains('blue')){
            mydiv.style.backgroundColor="blue"
            mydiv.textContent='blue'
        }
        else if(colorchange.contains('red')){
            mydiv.style.backgroundColor="red"
            mydiv.textContent='Red'
        }
        else if(colorchange.contains('yellow')){
            mydiv.style.backgroundColor="yellow"
            mydiv.textContent='yellow'
        }
        else if(colorchange.contains('green')){
            mydiv.style.backgroundColor="green"
            mydiv.textContent='green'
        }
        else if(colorchange.contains('brown')){
            mydiv.style.backgroundColor="brown"
            mydiv.textContent='brown'
        }
        else{
            mydiv.style.backgroundColor="pink"
            mydiv.textContent='no color picked'
        }
    })
})