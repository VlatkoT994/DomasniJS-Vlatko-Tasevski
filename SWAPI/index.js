
let getElements = function(url){
    $.get(url).then(function(success){
        createTable(success)
    },function(error){console.log(error)})
}
let createTable = function(elements)
{
    let table = document.querySelector('table')
    table.innerHTML = ''
    let tr = document.createElement('tr')
    if (elements.results)
        elementArr = (elements.results)
    else
        elementArr = [elements]
    for (attribute in elementArr[0])
    {
        let td = document.createElement('td');
        td.innerText = attribute;
        tr.appendChild(td)
    }
    table.appendChild(tr)
    elementArr.forEach(element => { 
        let tr = document.createElement('tr')
        for (attribute in element)
        {
            let td = document.createElement('td')
            if (Array.isArray(element[attribute]))
                td.appendChild(getList(element[attribute]))
            else
                td.innerText = element[attribute]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    });
}
let getList = function(arr){
    ul = document.createElement('ul')
    arr.forEach(item => {
        let li = document.createElement('li')
        li.innerText = item;
        li.style.cursor = 'pointer'
        li.addEventListener('click',(e) =>{
            getElements(e.target.innerText)
        },false)
        ul.appendChild(li)
    })
    return ul
}
$(document).ready(function(){
getElements('https://swapi.co/api/films');
})