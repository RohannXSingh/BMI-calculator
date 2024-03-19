function calculate (){
    const calculateHeight = parseFloat(document.getElementById('height').value);
    const calculateWeight = parseFloat(document.getElementById('weight').value);
    

   if (isNaN(calculateHeight) || isNaN(calculateWeight) || calculateHeight <= 0 || calculateWeight <=0) {
       document.getElementById('finalresult').innerText = "Enter valid Height or Weight"
       return;
    //Check if calculatedHeight and calculatedWeight is valid or not
   }
       const BMIcalculate = calculateWeight / ((calculateHeight / 100) **2);
       //(calculatedHeight / 100) converts heigt from cm to m
       //(**2) is for meters square
       let result;
     if (BMIcalculate < 18.5) {
        result = "You are Underweight"
     }else if (BMIcalculate < 25) {
        result = "Your weight is normal"
     }else if (BMIcalculate < 30){
        result = "You are over weight"
     }else{
        result = "Go to gym"
     }
  const finalValue = `BMI is : ${BMIcalculate.toFixed(2)}, ${result}`;
  const declaredResult = document.getElementById('finalresult').innerText = finalValue;
}











