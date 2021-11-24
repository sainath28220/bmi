// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if(height == 0 || mass == 0){
        console.log("INVALID INPUT");
    }else{
        BMI = mass / (height * height)
        console.log(BMI);
    }
}

module.exports = BMICalculator;
BMICalculator(mass,height);
