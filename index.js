function calculateBMI(){
    const height = document.getElementById('height').value / 100;
    const weight = decument.getElementById('weight').value;

    const bmi = weight / (height * height);

    document.getElementById('bmi_result').value = bmi.toFixed(2);

    if(bmi < 18.5){
        document.getElementById('weight_condition').innerText = "Under Weight.";
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        document.getElementById('weight_condition').innerText = "Normal Weight.";
    }
    else if(bmi > 24.9){
        document.getElementById('weight_condition').innerText = "Over Weight.";
    }
}

document.getElementById('btn').addEventListener("click", calculateBMI);