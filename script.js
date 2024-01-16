const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('.result')
    if (height === '' || height <= 0 || isNaN(height)) {
        alert('Please enter a valid Height')
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        alert('Please enter a valid Weight')
    } else {
        const bmi = (weight/((height * height)/10000)).toFixed(1)
        if (bmi < 18.5) {
            result.innerHTML = `Result: ${bmi}<br> You are Under Weight`
        } else if (bmi > 18.5 && bmi < 25) {
            result.innerHTML = `Result: ${bmi}<br> You are in Normal Range`
        } else if (bmi > 24.9 && bmi < 30) {
            result.innerHTML = `Result: ${bmi}<br> You are Over Weight`
        } else {
            result.innerHTML = `Result: ${bmi}<br> You are Obese`
        }
    }
})