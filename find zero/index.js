let findZero = function(start)
{
    let result = []
    if(start === 0)
        result = result.concat(start)
    else if (typeof(start)==='object')
        for (let i = 0; i < start.length; i++)
            result = result.concat(findZero(start[i]))
    return result
}
let arr = [[[2, [1, [[4, [[0], 5]]]]]]];
console.log(findZero(arr))
