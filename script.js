document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (height <= 0 || weight <= 0) {
        result.textContent = 'Please enter valid height and weight values.';
        return;
    }

    const bmi = weight / (height * height);
    
    let resultBmi = 'Your BMI: ' + bmi.toFixed(1) + '. ';

    if (bmi < 18.5) {
        resultBmi += 'You don’t weigh enough, go have something to eat.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultBmi += 'All good.';
    } else if (bmi >= 24.9 && bmi < 29.9) {
        resultBmi += 'You are overweight.';
    } else {
        resultBmi += 'You have severe obesity.';
    }

    result.textContent = resultBmi;
});




// document.getElementById('bmiForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const height = document.getElementById('height').value / 100;
//     const weight = document.getElementById('weight').value;
//     const result = document.getElementById('result');

//     const bmi = weight / (height * height);
    
//     let resultBmi = 'Your BMI: ' + bmi.toFixed(0) + '. ';

//     if (bmi < 18.5) {
//         resultBmi += 'You don’t weigh enough, go have something to eat.';
//     }else if(bmi >= 18.5 && bmi < 24.9){
//         resultBmi = 'All good';
//     }else if(bmi >= 24.9 && bmi < 29.9){
//         resultBmi += 'You are overweight';
//     }else{
//         resultBmi = 'You have severe obesity';
//     }

//     result.textContent = resultBmi;

// })