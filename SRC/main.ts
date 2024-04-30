import { Address } from "./ADDRESS/address";
import { Airline } from "./AIRLINE/airline";
import { Plane } from "./AIRPLANE/plane";
import { Seat } from "./AIRPLANE/seat";
import { Airport } from "./AIRPORT/airport";
import { Gate } from "./AIRPORT/gate";
import { Route } from "./AIRPORT/route";
import { Bage } from "./BOOKING/bage";
import { Booking } from "./BOOKING/booking";
import { BookingFlight } from "./BOOKING/bookingFlight";
import { Ticket } from "./BOOKING/ticket";
import { DateTime } from "./DATE/date";
import { Flight } from "./FLIGHT/flight";
import { Meal } from "./MEAL/meal";
import { Gender } from "./PERSON/gender";
import { Passenger } from "./PERSON/passenger";
import { Pilot } from "./PERSON/pilot";

//create address

let phnompenh = new Address("Phnom Penh","Cambodia");
let sr = new Address("Seim Reap","Cambodia");
let bankook = new Address("Bangkook","Thailand");

//create date

let date1 = new DateTime("04-05-2024","3:00 p.m.");
let date2 = new DateTime("05-06-2024","11:00 p.m.");

//airline
let airline1 = new Airline("Phnom Penh Airport", phnompenh);

//airplane
let planeb13 = new Plane("APB13");
let planeb12 = new Plane("APB12");
let planeb22 = new Plane("APB22");

//seat
let seat1 = new Seat("B01");
let seat2 = new Seat("B02");
let seat3 = new Seat("B03");
let seat4 = new Seat("B04");
let seat5 = new Seat("B05");
let seat6 = new Seat("B06");
let seat7 = new Seat("B07");

//==========add seat to plane
planeb13.addSeat(seat1,seat2,seat3,seat4,seat5,seat6,seat7);

//pilot

let pilot1 = new Pilot(1,"Pilot","last 1",36,Gender.MALE,1200,"N/A");
let pilot2 = new Pilot(2,"Pilot","last 2",45,Gender.MALE,1500,"N/A");
let pilot3 = new Pilot(3,"Pilot","last 3",52,Gender.MALE,1800,"N/A");


//gate
let gsr = new Gate("SR06");
let gpp = new Gate("PP03");
let gbk = new Gate("BK01");

//airport
let airport1 = new Airport("SR Airport",sr,gsr);
let airport2 = new Airport("Phnom Penh",bankook,gbk);

//route
let route1 = new Route("Phnom Penh,Cambodia","Seim Reap,Cambodia",airport1);
let route2 = new Route("Phnom Penh,Cambodia","Thailand",airport2);

//flight

let flight1 = new Flight("ABC001",planeb13,date1);
let flight2 = new Flight("ABC002",planeb12,date1);

//meal
let pizza = new Meal("Pizza",30);
let humberger = new Meal("Humberger",50);
let coca = new Meal("Coca",4);

//=====add pilot

flight1.addPilot(pilot1);
flight2.addPilot(pilot2);

// ==== add route
flight1.addRoute(route2);

// === add meal
flight1.addMeal(pizza,humberger,coca);

//passenger
let ngor = new Passenger(1,"Ngor","MAM",18,Gender.FEMALE,"N/A");
let cheat = new Passenger(2,"Socheatek","MAO",14,Gender.MALE,"N/A");
let khav = new Passenger(3,"khav","SAROEUN",18,Gender.MALE,"N/A");



//bage
let bage1 = new Bage(1,32);


//booking
let khavBooking = new Booking("BOOK1",khav,Ticket.Return, date1);
let cheatBooking = new Booking("BOOK2",cheat,Ticket.Return, date1);

//====== add booking
airline1.addBooking(khavBooking,cheatBooking);
//bookingFligh
let bookingFlighKhav = new BookingFlight(flight1,bage1,seat1);
let bookingFligCheat = new BookingFlight(flight1,bage1,seat2);
//========= add booking flight
khavBooking.addBookingFlight(bookingFlighKhav);
cheatBooking.addBookingFlight(bookingFligCheat);
//====== add flight
airline1.addFlight(flight1);
airline1.addFlight(flight2);

//====== add employee
airline1.addEmployee(pilot1,pilot2,pilot3);

//=============Q1 get info of passenger by booking reference number
// console.log(airline1.getInfoOfPassengerByBookingReferenceNumber("BOOK1"));

//=============Q2 how many passengers have return tickets

// console.log(airline1.getNumberOfReturnTicket(flight1));

//========Q3 As an airline pilot, I want to know, for a given date, how many flights I have to join

pilot1.addFlight(flight1);
pilot1.addFlight(flight2);

console.log(pilot1.getNumberOfFlightPilotJoin(date1));


// ======= Q4 As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare.

// console.log("Total of meal in this flight is :", airline1.getNumberOfMealTypeByGivenFlight(flight1));

//======= Q5  As an airline manager, I want to find out how much salary I pay all my employees.

// console.log("Salary that I need to pay all my employees is : $",airline1.getTotalOfSalaryPayAllEmployees());

// ===== Q6 As a passenger, I want to know which gate my plane is waiting at.

// console.log(airline1.getGateOfPassenger(ngor));

// orr
//flight need route in this case
// console.log(airline1.getGatePlaneWaiting(flight2));

