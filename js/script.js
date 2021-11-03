const far = document.getElementById("farenheit")
const cel = document.getElementById("celcius")
const submit = document.getElementById("submit")
const result = document.getElementById("answer")
const input = document.getElementById("input")
const reset = document.getElementById("reset")
result.innerText = 0

const farToCel = () => {
let farToCelcius = Math.floor(((input.value-32)*5)/9)
console.log(farToCelcius)
result.innerText = farToCelcius + " C"
}

const celToFar = () => {
  let celciusToFar = Math.floor((input.value * (9/5))) + 32
  console.log(celciusToFar)
   result.innerText = celciusToFar + ' F'
}

const tempConv = () => {
 if(far.checked){
    farToCel()
 }else{
    celToFar()
 }
}


const resetConv = () => {
far.checked =false
cel.checked = false
result.innerText = 0
input.value = ""
}

submit.addEventListener('click', tempConv)
reset.addEventListener("click", resetConv)










