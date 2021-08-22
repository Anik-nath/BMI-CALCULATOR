        const feet = document.getElementById('feet');
        const inch = document.getElementById('inch');
        const weight = document.getElementById('weight');
        const getBMI = document.getElementById('getBMI');
        const catagory = document.getElementById('catagory');
        const healthrisk = document.getElementById('healthrisk');
        const Calculatebutton = document.getElementById('Calculate-btn');
        const Resetbutton = document.getElementById('Reset-btn');

        //take input value
        function takeinputvalue(inputField){
            const inputText = inputField.value;
            const inputValue = parseFloat(inputText);
            return inputValue;
        }
        //inch to feet
        function inchtofeet(giveninch){
            const fixedinch = 12;
            const res = giveninch/fixedinch;
            const Result = parseFloat(res.toFixed(2));
            return Result;
        }
        //calculate BMI
        function BMI(mass,height){
            let totalBMI = (mass/(height*height));
            return totalBMI;
        }
        Calculatebutton.addEventListener('click',function(){
            //feet
            const newfeet = takeinputvalue(feet);
            const newinch = takeinputvalue(inch);
            //converted inch to feet
            const convertinch = inchtofeet(newinch);
            //total feet
            const totalFeet = convertinch + newfeet;
            //feet k meter nite hobe
            const fixedFeet = 3.28084;
            const calcMeter = totalFeet/fixedFeet;
            const meter = parseFloat(calcMeter.toFixed(2));
            //Weight
            const newWeight = takeinputvalue(weight);
            //validation
            if(newfeet < 0 || newinch < 0 || newWeight < 0){
               feet.value = 'invalid';
               inch.value = 'invalid';
               weight.value = 'invalid';
            }
            //get BMI value
            const yourBMI = BMI(newWeight,meter).toFixed(1);
            //set
            getBMI.value = yourBMI;
            //catagories
            if(yourBMI <= 18.5){
               catagory.value = 'underweight'
               healthrisk.value = 'greatest health risk'
            }
            else if(yourBMI > 18.5 && yourBMI <= 24.5)
            {
                catagory.value = 'healthy weight';
                healthrisk.value = '30% unhealthy'
            }
            else if(yourBMI >= 25.0 && yourBMI <= 29.9){
                catagory.value = 'over wright';
                healthrisk.value = 'lowest death rate'
            }
            else if(yourBMI > 30 && yourBMI <= 40){
                catagory.value = 'obesity';
                healthrisk.value = '30% healthy'
            }
            else if(yourBMI > 40){
                catagory.value = 'class 3 obesity';
                healthrisk.value = 'Extrmely healthy'
            }
            else{
                getBMI.value = '';
                catagory.value = '';
                healthrisk.value = ''
            }
        })
        //reset input
        function resetinputvalue(inputField){
            inputField.value = '';
        }
        Resetbutton.addEventListener('click',function(){
            resetinputvalue(feet);
            resetinputvalue(inch);
            resetinputvalue(weight);
            resetinputvalue(getBMI);
            resetinputvalue(catagory);
            resetinputvalue(healthrisk);
        })
