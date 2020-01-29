let clock = () => {
  let container = document.createElement('div');
  container.style.fontSize = '100px';
  container.style.padding = '20px';
  container.style.border = '1px solid black';
  document.body.appendChild(container);
  let addZeros = num => {
    if (num.toString().length === 1) return '0' + num;
    return num;
  };
  let getTime = () => {
    let curTime = new Date();
    container.innerText = `${curTime.getHours()}:${curTime.getMinutes()}:${addZeros(
      curTime.getSeconds()
    )}`;
  };
  getTime();
  return getTime;
};
let myClock = clock();
setInterval(() => {
  myClock();
}, 1000);
let letterCounter = function() {
  return arr => {
    return arr.map(value => value.length);
  };
};
let counter = letterCounter();
console.log(counter(['v', 'vl', 'vla', 'vlat', 'vlatk', 'vlatko']));
