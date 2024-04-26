import { Plane } from "../AIRPLANE/plane";
import { Route } from "../AIRPORT/route";
import { Date } from "../DATE/date";
import { Pilot } from "../PERSON/pilot";

export class Flight {
    private routes: Route[] = [];
    private pilots:Pilot[] = [];
  
    constructor(private flightNumber: string, private airplane:Plane, private date:Date) {}
  
  }
  