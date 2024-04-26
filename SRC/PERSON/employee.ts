import { Gender } from "./gender";
import { Person } from "./person";

export abstract class Employee extends Person{
      constructor(id:number, firstName:string, lastName:string, age: number, gender:Gender, private salary: number) {
            super(id,firstName,lastName,age,gender);
            this.salary = salary;
      }

      abstract getSalary():number;
}