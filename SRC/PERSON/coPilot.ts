
import { Flight } from "../FLIGHT/flight";
import { Employee } from "./employee";
import { Gender } from "./gender";

export class Copilot extends Employee {
    private flights: Flight[] = [];
    constructor(id: number, firstName: string, lastName: string, age: number, gender: Gender, salary: number, private license: string) {
        super(id, firstName, lastName, age, gender, salary);
        this.license = license;
    }
    public getSalary(): number {
        return this.salary;
    }

    public getID(): number {
        return this.id;
    }

    public addFlight(...flight: Flight[]): void {
        this.flights.push(...flight);
    }

}