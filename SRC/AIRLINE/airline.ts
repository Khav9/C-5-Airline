import { Address } from "../ADDRESS/address";
import { Booking } from "../BOOKING/booking";
import { Flight } from "../FLIGHT/flight";
import { Employee } from "../PERSON/employee";

export class Airline{
      private employees:Employee[] = [];
      private bookings:Booking[] = [];
      private flights:Flight[] = [];
      constructor(private name:string, private address:Address){}
}