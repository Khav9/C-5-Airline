import { Address } from "../ADDRESS/address";
import { Booking } from "../BOOKING/booking";
import { Ticket } from "../BOOKING/ticket";
import { DateTime } from "../DATE/date";
import { Flight } from "../FLIGHT/flight";
import { Employee } from "../PERSON/employee";
import { Passenger } from "../PERSON/passenger";
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

      /**
       * Counts the number of return tickets booked for a specific flight.
       * @param flight The flight for which return ticket count is to be calculated.
       * @returns The number of return tickets booked for the given flight.
       */
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
                  });``
            });
            return result;
      }

      /**
       * Counts the number of flights a pilot has joined on a specific date.
       * @param pilotToFind The pilot object for which flights are to be counted.
       * @param date The date on which flights are to be counted.
       * @returns The number of flights the pilot joined on the specified date.
       */
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

      /**
       * (see returns)
       * @param flightGive
       * @returns number of meal types for a given flight
       */
      public getNumberOfMealTypeByGivenFlight(flightGive: Flight): number {
            let result: number = 0;
            this.flights.forEach(flight => {
                  if (flight.getFlightNumber() === flightGive.getFlightNumber()) {
                        flight.getMeal().forEach(meal => {
                              result++;
                        });
                  }
            });   
            return result;
      }

      /**
       * Calculates the total salary to be paid to all employees.
       * @returns The total salary for all employees.
       */
      public getTotalOfSalaryPayAllEmployees(): number {
            let result: number = 0;
            this.employees.forEach(employee => {
                  result += employee.getSalary();
            });
            return result;
      }

      /**
       * Retrieves the gate numbers for all flights booked by a given passenger.
       * @param passenger The passenger object for which gates are to be retrieved.
       * @returns An array of gate numbers or undefined if no bookings are found for the passenger.
       */
      public getGateOfPassenger(passenger: Passenger): string[] | undefined {
            let result: string[] = [];
            this.bookings.forEach(booking => {
                  if (booking.getPassenger().getID() === passenger.getID()) {
                        booking.getFlight().forEach(flight => {
                              result = result.concat(flight.getFlight().getRoute().getAirport().getGate().getGateNumber());
                        });
                  }
            });
            return result;
      }

      /**
       * Retrieves the gate number for a given flight.
       * @param flightToFind The flight object for which the gate number is to be retrieved.
       * @returns The gate number of the flight or undefined if the flight is not found.
       */
      public getGatePlaneWaiting(flightGive: Flight):string{
            let result:string;
            this.flights.forEach(flight => {
                  if (flight.getFlightNumber() === flightGive.getFlightNumber()){
                        result =  flight.getRoute().getAirport().getGate().getGateNumber();
                  }
            });
            return result;
      }
}