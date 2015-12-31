'use strict'

namespace app.classes {
    export abstract class Vehicle {
        /**
         * constructor for the vehicle class
         * @param  {number} publichorsepower   [description]
         * @param  {number} publicnumSeats     [description]
         * @param  {string} publicmanufacturer belongs to the vehicle class

         */
        constructor (
            public horsepower: number,
            public numSeats: number,
            public manufacturer: string
        ) {};
    }
    export class Car extends Vehicle {
        /**
         * Creates a new instance of the car class.
         * @param  {number} horsepower     horsepower in the engine
         * @param  {number} numSeats       number of seats
         * @param  {string} manufacturer   maker
         * @param  {string} publiccatagory [desc

         */
        constructor(
            horsepower: number,
            numSeats: number,
            manufacturer: string,
            public catagory: string
        ) {
            super(horsepower, numSeats, manufacturer);
        }
    }
    export class Motorcycle extends Vehicle {
        /**
         * [constructor description]
         * @param  {number}  horsepower      [description]
         * @param  {number}  numSeats        [description]
         * @param  {string}  manufacturer    [description]
         * @param  {boolean} publiclooksCool [description]

         */
        constructor(
            horsepower: number,
            numSeats: number,
            manufacturer: string,
            public looksCool: boolean
        ) {
            super(horsepower, numSeats, manufacturer);
        }
    }
    export class Boat extends Vehicle {
        /**
         * [constructor description]
         * @param  {number} horsepower       [description]
         * @param  {number} numSeats         [description]
         * @param  {string} manufacturer     [description]
         * @param  {number} publicnumEngines [description]

         */
        constructor(
            horsepower: number,
            numSeats: number,
            manufacturer: string,
            public numEngines: number
        ) {
            super(horsepower, numSeats, manufacturer);
        }
    }
}


namespace app {
    //seed our array with a vehicle of each type
let boat = new app.classes.Boat(200,5,"Wellcraft", 1);
let car = new app.classes.Car(600, 2, "Ford", "Sports Car");
let Motorcycle = new app.classes.Motorcycle(500,2,"YAMAHA",true);
export let Vehicle: app.classes.Vehicle[] = [boat,car,Motorcycle];

//this will add the element of the string of html
function displayVechiles () {
    let elemString = '';

    //template tag / html tags
    // item. in h1 tag is the variable down here for .forEach(item)
    Vehicle.forEach((item) => elemString += `
<div class="col-sm-12">
<div class="well">
    <h1 ${item.constructor.toString().match(/\w+/g)[1]}></h1>
    <h3> horsepower: ${item.horsepower}</h3>
    <h3> manufacturer: ${item.numSeats}</h3>
    <h3> numSeats: ${item.manufacturer}</h3>
</div>
</div>
  `);
  document.getElementById('vehicle-results').innerHTML = elemString;
}

export function selectType(select: HTMLSelectElement) {
let placeholder: string;
if(select.value === "Car") placeholder ="Catagory...";
if(select.value === "Boat") placeholder = 'Number of Engines...';
if(select.value === "Motorcycle") placeholder = "does it look cool?(yes, no)";
//to check the value of select
//console.log(select.type);
document.getElementById('secondaryPropInput').innerHTML = `<input type="text" class="form-control" id="inputSecodary" placeholder="${placeholder}"/>`
}

export function createVehicle(event:Event) {
    //preventDefault() is preventing the page from refreshing from the form being submitted
    event.preventDefault();
    console.log('create Vehicle');
    let horsepower = $('#inputHP').val();
    let numbSeat = $('#inputNumSeats').val();
    let manufacturer = $('#inputManu').val();
    let type = $('#inputType').val();
    let secondary = $('#inputSecodary').val();

    //create the 'vehicle' object
    let vehicle: app.classes.Vehicle;
    if (type === 'Car') vehicle = new app.classes.Car(horsepower, numbSeat,manufacturer,secondary);
    if (type === 'Boat') vehicle = new app.classes.Boat(horsepower,numbSeat,manufacturer,secondary);
        if (type === 'Motorcycle') vehicle = new app.classes.Motorcycle(horsepower,numbSeat,manufacturer,secondary);

Vehicle.push(vehicle);
displayVechiles();
}
//call functions
displayVechiles();
var me = new app.classes.Car(300,2,'Ford','Sports Type')
} //end of app namespace
