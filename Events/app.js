let h1Primary = document.getElementById("h1Primary")

// h1Primary.addEventListener("click", () => {
//     alert("Hola")
// })

// const saluda = () => {
//     alert("Hola con function")
// }


// function saluda(name = "Name") {
//     alert(`Hola, ${name}`)
// }

// h1Primary.addEventListener("click", () => saluda("Juanita"))

// h1Primary.addEventListener("click", () => {
//     alert(`Hola, Deimian`)
// })




let txtExample = document.querySelector("#txtExample")
let paraExample = document.querySelector("#paraExample")
let txtExampleTwo = document.querySelector("#txtExampleTwo")

paraExample.innerHTML = "Hola"

txtExample.addEventListener("keydown", (event) => {
    console.log(`Se tocó la tecla ${event.key}`)
})

txtExample.addEventListener("input", () => {
    console.log("Hola desde el input")
})

txtExampleTwo.addEventListener("input", (event) => {
    paraExample.textContent = event.target.value
})

paraExample.addEventListener("click", (event) => {
    console.log(event)
})


console.log(txtExample)
console.log(paraExample)




let listenerFunction = function () {
    alert("First click");
    document.getElementById("onTimeButton").removeEventListener("click", listenerFunction);
}

function inicialize() {
    document.getElementById("onTimeButton").addEventListener("click", listenerFunction);
}

