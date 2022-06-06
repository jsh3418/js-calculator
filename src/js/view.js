import { data } from "./model.js"


const display = document.querySelector("#total")


export const updateDisplay = () => {
  display.textContent = `${data.firstValue ? data.firstValue : ''}${data.operation ? data.operation : ''}${data.secondValue ? data.secondValue : ''}`
}

