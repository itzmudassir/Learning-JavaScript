const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#bmiResult");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `Your BMI is: ${bmi}`;
    const paragraph = document.createElement('p');
    if (bmi < 18.5){
        paragraph.textContent = "Underwight";
        paragraph.style.color = 'orange'
    // Append the paragraph to the results element
    results.appendChild(paragraph);
    }
    else if (bmi >18.5 && bmi < 24.9){
        paragraph.textContent = "Normal";
        paragraph.style.color = 'green'
    // Append the paragraph to the results element
    results.appendChild(paragraph);
    }
    else if (bmi >25 && bmi < 29.9){
        paragraph.textContent = "Overweight";
        paragraph.style.color = '#FFC300 '
    // Append the paragraph to the results element
    results.appendChild(paragraph);
    }
    else if (bmi > 29.9){
        paragraph.textContent = "Obese";
        paragraph.style.color = 'red'
    // Append the paragraph to the results element
    results.appendChild(paragraph);
    }
  }
});
