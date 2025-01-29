// Calculate and compare costs
function calculateCost() {
    const selectedCar = JSON.parse(carSelect.value);
    const years = parseFloat(document.getElementById('years').value);
    const dailyKM = parseFloat(document.getElementById('dailyKM').value);
    const totalKM = years * 365 * dailyKM;
    const fuelCostPerLiter = 100; // Example cost
    const electricityCostPerKM = 0.5; // Example cost

    let totalCost;
    if (selectedCar.FuelType === 'Electric') {
        totalCost = selectedCar.Price + (totalKM * electricityCostPerKM);
    } else {
        const fuelUsed = totalKM / selectedCar.MileageEfficiency;
        totalCost = selectedCar.Price + (fuelUsed * fuelCostPerLiter);
    }

    document.getElementById('result').innerHTML = `
        <h2>Cost Analysis</h2>
        <p>Model: ${selectedCar.Model}</p>
        <p>Trim: ${selectedCar.Trim}</p>
        <p>Total Cost over ${years} years: ₹${totalCost.toFixed(2)}</p>
    `;
}

// Event listener for calculate button
document.getElementById('calculateButton').addEventListener('click', calculateCost);