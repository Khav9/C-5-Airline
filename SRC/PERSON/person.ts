import { Gender } from "./gender";

export abstract class Person  {
      constructor(protected id:number, protected firstName:string, protected lastName:string, private age: number, private gender:Gender ) {}

}