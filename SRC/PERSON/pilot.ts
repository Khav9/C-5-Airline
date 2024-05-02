import { DateTime } from "../DATE/date";
import { Flight } from "../FLIGHT/flight";
import { Employee } from "./employee";
import { Gender } from "./gender";

type result = {
    Date:string,
    Total: number,
    FlightNumber:string[]
}

export class Pilot extends Employee {
    private flights:Flight[] = [];
    constructor(id: number, firstName: string, lastName: string, age: number, gender: Gender, salary: number, private license: string) {
        super(id, firstName, lastName, age, gender, salary);
        this.license = license;
    }
    public getSalary(): number {
        return this.salary;
    }

    public getID():number{
        return this.id;
    }

    public addFlight(flight:Flight):void{
        this.flights.push(flight);
    }

    /**
     * Retrieves the number of flight pilots joined on a given date.
     * @param {Date} date The date for which to retrieve the number of flight pilots joined.
     * @returns {Result} The result object containing the date, total number of flight pilots joined, and flight numbers.
     */
    public getNumberOfFlightPilotJoin(date:DateTime):result{
        let result:result = {
            Date:"",
            Total:0,
            FlightNumber: []
        };

        this.flights.forEach(flight => {
            if (flight.getDateTime().getDate() === date.getDate()){
                result.Date = date.getDate();
                result.Total += 1;
                result.FlightNumber.push(flight.getFlightNumber());                
            }
        });
        return result;
    }
}