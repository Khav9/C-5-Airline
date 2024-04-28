import { Gender } from "./gender";

export abstract class Person  {
      constructor(protected id:number, private firstName:string, private lastName:string, private age: number, private gender:Gender ) {}
}