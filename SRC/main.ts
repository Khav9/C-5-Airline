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

//address
let phnompenh = new Address("Phnom Penh","Cambodia");
let sr = new Address("Seim Reap","Cambodia");
let bankook = new Address("Bangkook","Thailand");

//date
let date1 = new DateTime("04-05-2024","3:00 p.m.");
//airline
let ariline1 = new Airline("Phnom Penh Airport", phnompenh);

//airplane
let planeb13 = new Plane("APB13");
let planeb12 = new Plane("APB12");
let planeb22 = new Plane("APB22");

//seat
let seat1 = new Seat("B01");

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

//passenger
let ngor = new Passenger(1,"Ngor","MAM",18,Gender.FEMALE,"N/A");
let cheat = new Passenger(2,"Socheatek","MAO",14,Gender.MALE,"N/A");
let khav = new Passenger(3,"khav","SAROEUN",18,Gender.MALE,"N/A");
//ticket
let returnTrip = new Ticket("Return",560);
let oneway = new Ticket("Oneway",250);

//meal
let pizza = new Meal("Pizza",30);
let humberger = new Meal("Humberger",50);
let coca = new Meal("Coca",4);
//bage
let bage1 = new Bage(1,32);
//booking
let khavBook = new Booking("BOOK1",khav,returnTrip,date1)

//bookingFligh
let bookingFlighKhav = new BookingFlight(flight1,bage1,seat1);
// console.log(ariline1);
// console.log(planeb13);
// console.log(route1);
// console.log(flight1);
// console.log(khav);
// console.log(coca);
// console.log(khavBook);
console.log(bookingFlighKhav);







