import { DateTime } from "../DATE/date";
import { Flight } from "../FLIGHT/flight";
import { Passenger } from "../PERSON/passenger";
import { BookingFlight } from "./bookingFlight";
import { Ticket } from "./ticket";

export class Booking{
    private bookingFlights:BookingFlight[] = [];
    constructor(private bookingReferenceNumber:string, private passenger:Passenger, private ticket: Ticket, private date: DateTime){
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.passenger = passenger;
        this.ticket = ticket;
        this.date = date;
    }

    public addBookingFlight(...bookingFligh:BookingFlight[]):void{
        this.bookingFlights.push(...bookingFligh);
    }

    public getBookingReferenceNumber():string{
        return this.bookingReferenceNumber;
    }

    public getFlight():BookingFlight[] | undefined{
        return this.bookingFlights;
    }

    public getPassenger():Passenger{
        return this.passenger;
    }

    public getTicket():Ticket{
        return this.ticket;
    }
}