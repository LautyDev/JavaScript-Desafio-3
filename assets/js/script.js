const addition = document.getElementById('addition')
const subtraction = document.getElementById('subtraction')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')

addition.addEventListener('click', (addition) => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber + secondNumber

    alert(result)
})

subtraction.addEventListener('click', (subtraction) => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber - secondNumber

    alert(result)
})

multiplication.addEventListener('click', (multiplication) => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber * secondNumber

    alert(result)
})

division.addEventListener('click', (division) => {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value)
    let secondNumber = parseFloat(document.getElementById('secondNumber').value)
    
    const result = firstNumber / secondNumber

    alert(result)
})