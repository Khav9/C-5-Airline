import { Passenger } from "../PERSON/passenger";
import { BookingFlight } from "./bookingFlight";

export class Booking{
    private bookingFlights:BookingFlight;
    private passengers:Passenger;
    constructor(private bookingReferenceNumber:string,private passenger:Passenger){}
}