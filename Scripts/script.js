let calculation = localStorage.getItem('calculation') || " ";

displayCalculation();


function updateValue(value)
{
    calculation += value;

    localStorage.setItem("calculation",calculation);

    displayCalculation();
}

function evaluateCalculation()
{
    
    try{
        calculation = eval(calculation);

        localStorage.setItem("calculation",calculation);
        
        displayCalculation();
    }
    catch(err)
    {
        document.querySelector('.js-calc').innerHTML = err;
    }
}


function displayCalculation()
{
    document.querySelector('.js-calc').innerHTML = calculation;
}

function clearCalculation()
{
    calculation = " ";

    displayCalculation();
    localStorage.setItem("calculation",calculation);

}