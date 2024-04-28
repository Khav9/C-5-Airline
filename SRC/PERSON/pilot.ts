import { Employee } from "./employee";
import { Gender } from "./gender";

export class Pilot extends Employee {
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
}