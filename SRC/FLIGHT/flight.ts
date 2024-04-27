import { Plane } from "../AIRPLANE/plane";
import { Route } from "../AIRPORT/route";
import { DateTime } from "../DATE/date";
import { Pilot } from "../PERSON/pilot";

export class Flight {
    private routes: Route;
    private pilots:Pilot[] = [];
  
    constructor(private flightNumber: string, private airplane:Plane, private date:DateTime) {}

    public addPilot(...pilot:Pilot[]):void{
      this.pilots.push(...pilot);
    }

    public addRoute(route:Route):void{
      this.routes = route;
    }

    public getFlightNumber():string{
      return this.flightNumber;
    }
  
  }
  