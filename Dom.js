const para = document.querySelector('.para')
const button = document.querySelector("button")
const sum = document.querySelector(".sum")
    if (para.style.display === 'block') {
        para.style.display = 'none'
        button.style.backgroundColor = 'pink'
        button.style.padding = '8px 10px'
        button.style.border = '1px solid green'
        button.innerText = "Read More"
    } else {
        para.style.display = 'block'
        button.style.backgroundColor = 'red'
        button.style.padding = '8px 10px'
        button.style.border = '1px solid yellow'
        button.innerText = "Read Less"
    }


const add = (a, b) => {
    let add = a + b
    document.writeln(add)
}

sum.addEventListener("click", () => {
    add(2, 5)
})
button.addEventListener('click', showHidePare)