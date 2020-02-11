// function Animals(name, sounds)
// {
//     this.name = name;
//     this.sounds = sounds;
// }
// function Walk(name, sounds, legs)
// {
//     Object.assign(this, new Animals(name, sounds)) // Inheritance throught constructors
//     this.legs = legs
// }
// let zivotno = new Walk('kuce', 'av', 4)
// console.log(zivotno)

let transportCenter = {
    maxBusses: 10,
    listOfBusses: []
}
let line = Object.create(transportCenter)
line = Object.assign(line, {
    startDestination: undefined,
    endDestination: undefined,
    numStations: undefined,
    lineNumber: undefined
})
let newLine = function (startDest, endDest, numStat, lineNo, stations)
{
    result = Object.create(line)
    result.startDestination = startDest;
    result.endDestination = endDest;
    result.numStations = numStat;
    result.lineNumber = lineNo;
    result.stations = stations
    return result;
}
let newBus = function (linija, freeSits, moving, currentStop, direction)
{
    let bus = Object.create(linija)
    bus = Object.assign(bus, {
        freeSits: freeSits,
        moving: moving,
        currentStop: currentStop,
        direction: direction,
        card: document.createElement('div'),
        attachCard: function ()
        {
            console.log(this.stations[this.currentStop])
            document.querySelector(`.${this.stations[this.currentStop]}>.cards-container`).appendChild(this.card)
        },
        updateCard: function ()
        {
            console.log(this.direction, this.endDestination)
            this.card.innerHTML = `<h4>linija: ${this.lineNumber}</h4><h4>Prazni Mesta:${this.freeSits}</h4><h4>direction: ${(this.direction === 1) ? this.endDestination : this.startDestination}</h4>`
        }
    })
    bus.card.style.border = '1px solid black'
    bus.card.style.width = '100%'
    if (transportCenter.listOfBusses.length < transportCenter.maxBusses)
        transportCenter.listOfBusses.push(bus)
    bus.updateCard();
    bus.attachCard();
}
let dvojka = newLine('saraj', 'avtokomanda', 8, 2, ['saraj', 'benziska-pumpa', 'gjorce-petrov', 'kino-gjorce', 'hotel-karpos', 'posta', 'bit-pazar', 'avtokomanda'])
let petka = newLine('deksion', 'lisice', 9, 5, ['deksion', 'gjorce-petrov', 'kino-gjorce', 'porta-kozle', 'katolicka-crkva', 'gradska-bolnica', 'zeleznicka-stanica', 'kapitol', 'novo-lisice'])
for (let i = 0; i < 5; i++)
    newBus((i % 2 === 0) ? petka : dvojka, 20, true, i * 2, 1)
console.log(transportCenter)

let printBusses = function ()
{
    let table = document.querySelector('table')
    transportCenter.listOfBusses.map((bus, index) =>
    {
        console.log('blabla')
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>avtobus broj ${index}</td><td>linija ${bus.lineNumber}</td><td>${bus.moving ? 'avtobusot se dvizi' : 'avtobusot ne se dvizi'}</td>`
        table.appendChild(tr)
    })
}
let moveBus = function (bus)
{
    document.querySelector(`.${bus.stations[bus.currentStop]}>.cards-container`).removeChild(bus.card)
    bus.currentStop += bus.direction;
    bus.freeSits = Math.floor(5 * Math.random() + 10)
    bus.updateCard();
    bus.attachCard();
    if (bus.currentStop === bus.numStations - 1)
        bus.direction = -1;
    else if (bus.currentStop === 0)
        bus.direction = 1
}
console.log(transportCenter)
// printBusses()
setInterval(() => { transportCenter.listOfBusses.map(value => { moveBus(value) }) }, 5000)

