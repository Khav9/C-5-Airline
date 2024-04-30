import { Address } from "../ADDRESS/address";
import { Booking } from "../BOOKING/booking";
import { Ticket } from "../BOOKING/ticket";
import { Flight } from "../FLIGHT/flight";
import { Employee } from "../PERSON/employee";
import { Passenger } from "../PERSON/passenger";

type Meal = {
      Total:number,
      Meal:string[],
}
type resultOfTicket = {
      Total:number,
      Passenger:Passenger[]
}

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

      public getNumberOfReturnTicket(flight: Flight): resultOfTicket {
            let result:resultOfTicket ={
                  Total:0,
                  Passenger:[],
            }

            this.bookings.forEach(element => {
                  let flightNumber = element.getFlight();
                  flightNumber.forEach(elemen => {
                        if (elemen.getFlight().getFlightNumber() === flight.getFlightNumber()) {
                              if (element.getTicket() === Ticket.Return) {
                                    result.Total ++;
                                    result.Passenger.push(element.getPassenger());
                              }
                        }
                  });
            });
            return result;
      }

      public getNumberOfMealTypeByGivenFlight(flightGive: Flight): Meal {
            
            let result:Meal = {
                  Total:0,
                  Meal:[],
            };

            this.flights.forEach(flight => {
                  if (flight.getFlightNumber() === flightGive.getFlightNumber()) {
                        flight.getMeal().forEach(meal => {
                              result.Total += 1;
                              result.Meal.push(meal.getName())                              
                        });
                  }
            });
            return result;
      }

      public getTotalOfSalaryPayAllEmployees(): number {
            let result: number = 0;
            this.employees.forEach(employee => {
                  result += employee.getSalary();
            });
            return result;
      }

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