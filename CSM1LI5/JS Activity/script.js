function convertToFahrenheit() {
    const celString = document.getElementById("celsiusInput").value;
    
    // Check if the STRING is empty first
    if (celString.trim() === "") {
        alert("Number cannot be empty!");
        return;
    }
    console.log(celString);

    const cel = parseFloat(celString); // Safer way to convert to a number
    const f = (cel * 1.8) + 32;
    console.log(cel);

    document.getElementById("result").innerHTML = `${f}°F`;  
}
