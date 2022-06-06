import { data } from "./model.js"


export const compute = (firstValue, operation, secondValue) => {
  let result

  if (operation === "+") {
    result = Number(firstValue) + Number(secondValue)
  }

  if (operation === "-") {
    result = Number(firstValue) - Number(secondValue)
  }

  if (operation === "X") {
    result = Number(firstValue) * Number(secondValue)
  }

  if (operation === "/") {
    result = Number(firstValue) / Number(secondValue)
  }

  return result
}


export const setOperation = (operation) => {
  if (data.firstValue === "0") return

  data.operation = operation
}


export const appendNumber = (number) => {
  if (data.firstValue === '0') {
    data.firstValue = number
    return
  }

  if (data.operation === null && data.firstValue.length < 3) {
    data.firstValue += number
    return
  }

  if (data.operation !== null && data.secondValue === null) {
    data.secondValue = number
    return
  }

  if (data.secondValue !== null && data.secondValue.length < 3) {
    data.secondValue += number
    return
  }
}