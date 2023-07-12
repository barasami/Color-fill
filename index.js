
//getting all classes with btn
const mycolors=document.querySelectorAll(".btn")

//looping through btns

mycolors.forEach((mybtn)=>{
    mybtn.addEventListener('click',(e)=>{
        let colorchange=e.currentTarget.classList
        if(colorchange.contains('black')){
            
        }
    })
})