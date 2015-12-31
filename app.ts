'use strict'

namespace app.classes {
    export abstract class Vehicle {
        constructor (
            public horsepower: number,
            public numSeats: number,
            public manufacturer: string
        ) {};
    }
    export class Car extends Vehicle {
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

function createVehicle(event:Event) {
    event.preventDefault();
    console.log('create Vehicle');
}
//call functions
displayVechiles();
} //end of app namespace
