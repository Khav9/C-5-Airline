import { Address } from "../ADDRESS/address";
import { Booking } from "../BOOKING/booking";
import { Ticket } from "../BOOKING/ticket";
import { DateTime } from "../DATE/date";
import { Flight } from "../FLIGHT/flight";
import { Employee } from "../PERSON/employee";
import { Pilot } from "../PERSON/pilot";

export class Airline {
      private employees: Employee[] = [];
      private bookings: Booking[] = [];
      private flights: Flight[] = [];
      constructor(private name: string, private address: Address) { }

      public addBooking(...booking: Booking[]): void {
            this.bookings.push(...booking);
      }

      public addFlight(...flight: Flight[]): void {
            this.flights.push(...flight);
      }

      public addEmployee(...employee: Employee[]): void {
            this.employees.push(...employee);
      }

      public getInfoOfPassengerByBookingReferenceNumber(bookingReferenceNumber: string): Booking[] | undefined {
            const result: Booking[] = this.bookings.filter(booking => booking.getBookingReferenceNumber() === bookingReferenceNumber);
            return result;
      }

      public getNumberOfReturnTicket(flight: Flight): number {
            let result: number = 0;
            this.bookings.forEach(element => {
                  let flightNumber = element.getFlight();
                  flightNumber.forEach(elemen => {
                        if (elemen.getFlight().getFlightNumber() === flight.getFlightNumber()) {
                              if (element.getTicket() === Ticket.Return) {
                                    result += 1;
                              }
                        }
                  });
            });
            return result;
      }

      public getNumberOfFlightPilotJoin(pilotGive: Pilot, date: DateTime) {
            let result: number = 0;
            this.flights.forEach(flight => {
                  flight.getPilot().forEach(pilot => {
                        if (pilot.getID() === pilotGive.getID()) {
                              if (flight.getDateTime().getDate() === date.getDate()) {
                                    result++;
                              }

                        }
                  });
            });

            return result;
      }

      public getNumberOfMealTypeByGivenFlight(flightGive: Flight):number {
            let result:number = 0;
            this.flights.forEach(flight => {
                  if (flight.getFlightNumber() === flightGive.getFlightNumber()){
                        flight.getMeal().forEach(meal => {
                              result++;
                        });
                  }
            });
           return result; 
      }

      public getTotalOfSalaryPayAllEmployees():number{
            let result:number = 0;
            this.employees.forEach(employee => {
                  result += employee.getSalary();
            });
            return result;
      }

}