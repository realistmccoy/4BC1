'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var classes;
    (function (classes) {
        var Vehicle = (function () {
            function Vehicle(horsepower, numSeats, manufacturer) {
                this.horsepower = horsepower;
                this.numSeats = numSeats;
                this.manufacturer = manufacturer;
            }
            ;
            return Vehicle;
        })();
        classes.Vehicle = Vehicle;
        var Car = (function (_super) {
            __extends(Car, _super);
            function Car(horsepower, numSeats, manufacturer, catagory) {
                _super.call(this, horsepower, numSeats, manufacturer);
                this.catagory = catagory;
            }
            return Car;
        })(Vehicle);
        classes.Car = Car;
        var Motorcycle = (function (_super) {
            __extends(Motorcycle, _super);
            function Motorcycle(horsepower, numSeats, manufacturer, looksCool) {
                _super.call(this, horsepower, numSeats, manufacturer);
                this.looksCool = looksCool;
            }
            return Motorcycle;
        })(Vehicle);
        classes.Motorcycle = Motorcycle;
        var Boat = (function (_super) {
            __extends(Boat, _super);
            function Boat(horsepower, numSeats, manufacturer, numEngines) {
                _super.call(this, horsepower, numSeats, manufacturer);
                this.numEngines = numEngines;
            }
            return Boat;
        })(Vehicle);
        classes.Boat = Boat;
    })(classes = app.classes || (app.classes = {}));
})(app || (app = {}));
var app;
(function (app) {
    var boat = new app.classes.Boat(200, 5, "Wellcraft", 1);
    var car = new app.classes.Car(600, 2, "Ford", "Sports Car");
    var Motorcycle = new app.classes.Motorcycle(500, 2, "YAMAHA", true);
    app.Vehicle = [boat, car, Motorcycle];
    function displayVechiles() {
        var elemString = '';
        app.Vehicle.forEach(function (item) { return elemString += "\n<div class=\"col-sm-12\">\n<div class=\"well\">\n    <h1 " + item.constructor.toString().match(/\w+/g)[1] + "></h1>\n    <h3> horsepower: " + item.horsepower + "</h3>\n    <h3> manufacturer: " + item.numSeats + "</h3>\n    <h3> numSeats: " + item.manufacturer + "</h3>\n</div>\n</div>\n  "; });
        document.getElementById('vehicle-results').innerHTML = elemString;
    }
    function selectType(select) {
        var placeholder;
        if (select.value === "Car")
            placeholder = "Catagory...";
        if (select.value === "Boat")
            placeholder = 'Number of Engines...';
        if (select.value === "Motorcycle")
            placeholder = "does it look cool?(yes, no)";
        document.getElementById('secondaryPropInput').innerHTML = "<input type=\"text\" class=\"form-control\" id=\"inputSecodary\" placeholder=\"" + placeholder + "\"/>";
    }
    app.selectType = selectType;
    function createVehicle(event) {
        event.preventDefault();
        console.log('create Vehicle');
    }
    displayVechiles();
})(app || (app = {}));
