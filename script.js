const divs = document.querySelectorAll('.wrapper div')
const wrapper = document.querySelector('.wrapper')
const colors = ["lime", "red", "black", "tomato"]
const text = ["styles", "styles", "styles", "styles"]


//1 метод
// divs.forEach((item) => {
//     item.addEventListener("click", () => {
//         divs.forEach((el => el.removeAttribute("class")))
//         const randomNumber = Math.floor(Math.random() * colors.length)
//         item.classList.add(colors[randomNumber])
//         item.innerText = text[randomNumber]
//     })
// })


//2 метод -- быстрее чем первый метод
// wrapper.addEventListener("click",(event)=>{
//     if (event.target.classList[0] !== "wrapper"){
//         divs.forEach(( el => {
//             el.removeAttribute("class")// удаляет предыдущий класс
//             el.innerHTML = "" // пустая ячейка
//         }))
//         const randomNumber = Math.floor(Math.random() * 4)
//         event.target.classList.add(colors[randomNumber])
//         event.target.innerText = text[randomNumber]
//     }
// })

divs.forEach((item, idx) => {
    item.addEventListener("click", () => {
        const randomNumber = Math.floor(Math.random() * colors.length)
        divs[idx + 1].classList.add(colors[randomNumber])
    })
    if (idx === divs.length - 1)
        idx = -1
})

//  
