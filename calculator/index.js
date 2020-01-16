let changeOperator = function(str, newOpperator)
{
    str = `${str.substring(0,str.length - 2)}${newOpperator} `
    return str;
}
let parFloat = function(eqArr){
for (let i = 0; i < eqArr.length; i++)
{
    if (parseFloat(eqArr[i]) || (parseFloat(eqArr[i]) === 0))
    eqArr[i] = parseFloat(eqArr[i])
}
return eqArr;
}
let removeBracketErrors = function(eqArr)
{
    let totBrackets = 0;
    for (let i = 0; i < eqArr.length; i++)
    {
        if (eqArr[i] === '(')
        {
            totBrackets++;
        }
        else if (eqArr[i] === ')')
        {
            totBrackets--;
            if (totBrackets < 0)
            {
                eqArr.unshift('(')
                totBrackets++;
                i++;
            }
        }
    }
    if (totBrackets > 0)
    {
        for (let i = 0; i < totBrackets; i++)
        {
        eqArr.push(')')
        }
    }
    else if (totBrackets < 0)
    {
        for (let i = 0; i < (0 - totBrackets); i++)
        {
            eqArr.unshift('(')
        }
    }
    return eqArr
}
let doEquation = function(eqArr)
{
    if (eqArr === [''])
    return 0
    eqArr = removeBracketErrors(eqArr)
    for (let i = 0; i <= eqArr.length; i++)
    {
        if (eqArr[i] === '(')
        {
            let sameLevel = 0;
            for (let j = i + 1; j < eqArr.length; j++)
            {
                if (eqArr[j] === '(')
                    sameLevel++;
                if (eqArr[j] === ')')
                {
                    if (sameLevel === 0)
                    {
                        eqArr.splice(i, j - i + 1 , doEquation(eqArr.slice(i+1, j)))
                        break;
                    }
                    sameLevel--;
                   
                }
            }
        }
    }
    for (let i = 0; i <= eqArr.length; i++)
    {
        if (eqArr[i] === '*')
        {
        eqArr.splice(i - 1, 3, eqArr[i - 1] * eqArr[i + 1])
        i--;
        }
        else if (eqArr[i] === '/')
        {   
        eqArr.splice(i - 1, 3, eqArr[i - 1] / eqArr[i + 1])
        i--;
        } 
    }
    for (let i = 0; i <= eqArr.length; i++)
    {
        if (eqArr[i] === '+')
        {
            eqArr.splice(i - 1, 3, eqArr[i - 1] + eqArr[i + 1]);
            i--;
        }
        else if (eqArr[i] === '-')
        {
            eqArr.splice(i - 1, 3, eqArr[i - 1] - eqArr[i + 1]) ;
            i--;
        }
    }
    if (eqArr.length > 1)
        return 'error';
    return eqArr[0]
}
let forC = function()
{
    let eqDisplay = document.querySelector('.equation');
    let numDisplay = document.querySelector('.result');
    equation = '';
    eqDisplay.innerText = '';
    numDisplay.innerText = '';
    alreadyPoint = false;
}
let forNumbers = function(e)
{
    let eqDisplay = document.querySelector('.equation')
    let numDisplay = document.querySelector('.result')
    let number = e.target.innerText;
    
    if ((equation[equation.length-1] === ' ') || postEqual)
    {
        numDisplay.innerText = '';
        postEqual = false
    }
    numDisplay.innerText = numDisplay.innerText + number;
    equation += number; 
}
let forPoint = function(e)
{
    if (!alreadyPoint)
    {
        let eqDisplay = document.querySelector('.equation')
        let numDisplay = document.querySelector('.result')
        let number = e.target.innerText;

        if ((equation[equation.length-1] === ' ') || postEqual)
        {
            numDisplay.innerText = '';
            postEqual = false
        }
        numDisplay.innerText = numDisplay.innerText + number;
        equation += number;
        alreadyPoint = true;
    }
}
let forOperators = function(e)
{
    alreadyPoint = false;
    let eqDisplay = document.querySelector('.equation')
    let numDisplay = document.querySelector('.result')
    let opperator = e.target.innerText;
    if (postEqual)
    {
        equation = numDisplay.innerText;
        postEqual = false;
    }
    if (equation[equation.length - 1] === ' ')
    {
        equation = changeOperator(equation, opperator)
        eqDisplay.innerText = equation;
    }
    else
    {
        let result = doEquation(parFloat(equation.split(' ')))
        numDisplay.innerText = result;
        equation = equation + ` ${opperator} `
        eqDisplay.innerText = equation;
    }
}
let forBracket = function(e)
{
    let eqDisplay = document.querySelector('.equation') 
    let type = e.target.innerText;
    if (type === '(')
        {
            if ((parseFloat(equation[equation.length-1])) || ((parseFloat(equation[equation.length-1])) === 0) || (equation[equation.length-1] === ')'))
                equation += ' ( '
            else
                equation += '( '
        }
    else
        equation += ' )'
    eqDisplay.innerText = equation;
}
let forEqual = function()
{
    let eqDisplay = document.querySelector('.equation')
    let numDisplay = document.querySelector('.result')
    let result = doEquation(parFloat(equation.split(' ')))
    numDisplay.innerText = result;
    eqDisplay.innerText = equation + ' =';
    equation = ''
    postEqual = true;
    alreadyPoint = false;
}
let alreadyPoint = false
let postEqual = false;
let equation = ``
let clear = document.querySelector('.clear')
clear.addEventListener('click',forC,false)
let numberBtns = document.querySelectorAll('.number')
for (let i = 0; i < numberBtns.length; i++)
{
    numberBtns[i].addEventListener('click',forNumbers,false)
}
let opperatorBtns = document.querySelectorAll('.opperator')
for (let i = 0; i < opperatorBtns.length; i++)
{
    opperatorBtns[i].addEventListener('click',forOperators,false)
}
let point = document.querySelector('.point')
point.addEventListener('click', forPoint, false)
let equalBtn = document.querySelector('.equal')
equalBtn.addEventListener('click',forEqual,false)
let brackets = document.querySelectorAll('.bracket')
for (let i = 0; i < brackets.length; i++)
{
    brackets[i].addEventListener('click',forBracket,false)
}