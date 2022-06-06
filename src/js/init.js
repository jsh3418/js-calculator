import { handleNumberButton, handleOperationButton, handleAllClear, handleComputeButton } from './controller.js'
import { data } from "./model.js"
import { updateDisplay } from './view.js'

const numberButtons = document.querySelectorAll(".digit")
const operationButtons = document.querySelectorAll(".operation")
const allClearButton = document.querySelector(".modifier")
const computeButton = document.querySelector("#computeButton")

const initEventListener = () => {
  numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", handleNumberButton)
  })

  operationButtons.forEach((operationButton) => {
    operationButton.addEventListener("click", handleOperationButton)
  })

  allClearButton.addEventListener("click", handleAllClear)

  computeButton.addEventListener("click", handleComputeButton)
}

const initData = () => {
  data.firstValue = "0"
  data.operation = null
  data.secondValue = null
}

export const initApp = () => {
  initData()
  updateDisplay()
  initEventListener()
}