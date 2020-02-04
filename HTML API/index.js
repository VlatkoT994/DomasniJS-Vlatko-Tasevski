const getRandomPoint = color => {
  return { x: 100 * Math.random(), y: 100 * Math.random(), color: color };
};
const getDistance = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
const printPoint = dot => {
  let point = document.createElement('div');
  point.style.width = '7px';
  point.style.height = '7px';
  point.style.position = 'absolute';
  point.style.top = `${dot.x}%`;
  point.style.left = `${dot.y}%`;
  point.style.backgroundColor = `${dot.color}`;
  point.style.borderRadius = '50%';
  document.querySelector('.container').appendChild(point);
};
let myLocation;
let point1;
let point2;
let geoPromise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    location => {
      resolve({
        x: location.coords.latitude,
        y: location.coords.longitude,
        color: 'red'
      });
    },
    error => {
      reject(error);
    }
  );
});
useLocation();
async function useLocation() {
  point1 = getRandomPoint('green');
  printPoint(point1);
  point2 = getRandomPoint('blue');
  printPoint(point2);
  myLocation = await geoPromise;
  printPoint(myLocation);
  if (getDistance(point1, myLocation) < getDistance(point2, myLocation))
    console.log(
      `the ${point1.color} colored pointer is closer to your location`
    );
  else
    console.log(
      `the ${point2.color} colored pointer is closer to your location`
    );
}
