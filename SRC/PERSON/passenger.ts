import { Gender } from "./gender";
import { Person } from "./person";

export class Passenger extends Person {
    constructor(id: number, firstName: string, lastName: string, age: number, gender: Gender, private passport: string) {
        super(id, firstName, lastName, age, gender);
        this.passport = passport;
    }

    public getID():number{
        return this.id;
    }

    public getFullName():string{
        return this.firstName + " "+  this.lastName;
    }

}