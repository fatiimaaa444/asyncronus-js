// Syncronus => line by line 

// Asyncronus js 
const button = document.querySelector('button')
const h1 = document.querySelector('h1')
const sum = () => {
    console.log("sUM")
}
function interval() {
    h1.style.backgroundColor = "red"
    h1.style.color = "yellow"
    h1.style.textAlign = "center"
    h1.innerText = "Hello Project"
    setTimeout(() => {
        h1.style.backgroundColor = "green"
        h1.style.color = "white"
        h1.style.textAlign = "right"
        h1.innerText = "Hi Project"
        setTimeout(() => {
            h1.style.backgroundColor = "pink"
            h1.style.color = "purple"
            h1.innerText = "Bye Project"
            h1.style.textAlign = "left"
            setInterval(() => {
                interval()
            }, 1000)
        }, 2000)
    }, 1000)
}
button.addEventListener('click', interval)








