let inputValue = document.getElementById("inputvalue");
let convertBtn = document.getElementById("convertbtn");
let lengthOutput = document.getElementById("lengthoutput");
let volumeOutput = document.getElementById("volumeoutput");
let massOutput = document.getElementById("massoutput");

convertBtn.addEventListener("click", function() {
    let value = parseFloat(inputValue.value);
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    // Length conversion
    let meters = value  * 0.3048;
    let feet  = value / 0.3048;
    lengthOutput.textContent = `${value} meters = ${feet.toFixed(3)} feet | ${value}  feet = ${meters.toFixed(3)} meters`

    // Volume conversion
    let liters = value * 3.78541;
    let gallons = value / 3.78541;
    volumeOutput.textContent = `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`

    // Mass conversion
    let kilograms = value * 0.453592;
    let pounds = value / 0.453592;
    massOutput.textContent = `${value} kilograms = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kilograms.toFixed(3)} kilograms`;

});