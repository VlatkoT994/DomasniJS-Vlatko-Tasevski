function BlackCircle(posTop,posLeft)
{
    this.positionTop = posTop;
    this.positionLeft = posLeft;
    this.directionTop = Math.floor(-2 + 4*(Math.random()))
    this.directionLeft = Math.floor(-2 + 4*(Math.random()))
    this.directionTop = (this.directionTop === 0) ? 1: this.directionTop
    this.directionLeft = (this.directionLeft === 0) ? 1: this.directionLeft
    this.element = document.createElement('div')
    this.element.style.width = '400px'
    this.element.style['z-index'] = 999 
    this.element.style.height = '400px'
    this.element.style.position = 'absolute'
    this.element.style['background-color'] ='black'
    this.element.style['border-radius'] = '50%'
    this.element.style.top = posTop + '%'
    this.element.style.left = posLeft + '%'
    this.zakaci = function(){
        container.appendChild(this.element)
    }
    this.move = ()=>{
            this.positionTop += this.directionTop;
            this.positionLeft += this.directionLeft;
        this.element.style.top = `${this.positionTop}%`
        this.element.style.left = `${this.positionLeft}%`
        if ((this.positionTop === 55) || (this.positionTop === 54))
            this.directionTop = Math.floor(0 - 2*Math.random())
        else if((this.positionTop === 2) || (this.positionTop === 1))
            this.directionTop = Math.floor(1 + 2* Math.random())
        if ((this.positionLeft === 78) || (this.positionLeft === 77))
            this.directionLeft = Math.floor(0 - 2*Math.random())
        else if((this.positionLeft === 1) || (this.positionLeft === 2))
            this.directionLeft = Math.floor( 1 + 2*Math.random())
    }
    this.element.addEventListener('mouseover',()=>{alert('you lose')
window.winstatus = false},false)
}
let container = document.querySelector('.game-container')
container.style.position = 'relative';
container.style.width = '100%'
container.style.height = '100%'
let winstatus = true;
let circle1 = new BlackCircle(4,7)
let circle2 = new BlackCircle(53,75)
let circle3 = new BlackCircle(30,30)
circle1.zakaci();
circle2.zakaci();
circle3.zakaci()
setInterval(circle1.move, 20);
setInterval(circle2.move, 20);
setInterval(circle3.move, 20);
let redCircle = document.createElement('div')
redCircle.style.width = '40px'
redCircle.style.height = '40px'
redCircle.style.cursor = 'none'
redCircle.style['background-color'] = 'red';
redCircle.style['border-radius'] = '50%';
redCircle.style.position = 'absolute'
document.body.appendChild(redCircle)
document.addEventListener('mousemove',(e) => {
    redCircle.style.top = e.clientY - 20
    redCircle.style.left = e.clientX - 20
})
setTimeout(()=>{if (winstatus === true)
alert('You win')},10000)
console.log(Math.floor(-0.5))