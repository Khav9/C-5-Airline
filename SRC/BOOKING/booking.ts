import { Date } from "../DATE/date";
import { Passenger } from "../PERSON/passenger";
import { BookingFlight } from "./bookingFlight";
import { Ticket } from "./ticket";

export class Booking{
    private bookingFlights:BookingFlight[] = [];
    constructor(private bookingReferenceNumber:string, private passenger:Passenger, private ticket: Ticket, private date: Date){
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.passenger = passenger;
        this.ticket = ticket;
        this.date = date;
    }
}