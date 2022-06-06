import { data, resetData } from "./model.js"
import { compute, appendNumber, setOperation } from "./service.js"
import { updateDisplay } from "./view.js"


export const handleNumberButton = (event) => {
  const number = event.target.textContent
  appendNumber(number)
  updateDisplay()
}

export const handleOperationButton = (event) => {
  const operation = event.target.textContent
  setOperation(operation)
  updateDisplay()
}

export const handleComputeButton = () => {
  if (data.firstValue === null || data.operation === null || data.secondValue === null) return

  const result = compute(data.firstValue, data.operation, data.secondValue)

  resetData()
  data.firstValue = String(Math.floor(result))

  updateDisplay()
}

export const handleAllClear = () => {
  resetData()
  updateDisplay()
}