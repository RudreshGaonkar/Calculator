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
    calculation = eval(calculation);

    localStorage.setItem("calculation",calculation);

    displayCalculation();
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