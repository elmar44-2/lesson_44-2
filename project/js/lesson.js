// phon block
const phoneinput = document.querySelector("#phone_input")
const phonebutton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

let regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phonebutton.onclick = () => {
   if (regExp.test(phoneinput.value)) {
       phoneResult.innerHTML = "OK"
       phoneResult.style.color = "green"
   } else {
       phoneResult.innerHTML = "NOT OK"
       phoneResult.style.color = "red"
   }
}