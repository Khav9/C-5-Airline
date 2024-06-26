import { Plane } from "../AIRPLANE/plane";
import { Route } from "../AIRPORT/route";
import { DateTime } from "../DATE/date";
import { Meal } from "../MEAL/meal";
import { Copilot } from "../PERSON/coPilot";
import { Pilot } from "../PERSON/pilot";

export class Flight {
  private routes: Route;
  private pilot: Pilot;
  private coPilot: Copilot;
  private meals: Meal[] = [];

  constructor(private flightNumber: string, private airplane: Plane, private date: DateTime) { }

  public addPilot(pilot: Pilot): void {
    this.pilot = pilot;
  }

  public addCopilot(coPilot: Copilot): void {
    this.coPilot = coPilot;
  }

  public addRoute(route: Route): void {
    this.routes = route;
  }

  public getFlightNumber(): string {
    return this.flightNumber;
  }

  public getPilot(): Pilot | undefined {
    return this.pilot;
  }

  public getDateTime(): DateTime {
    return this.date;
  }

  public addMeal(...meal: Meal[]): void {
    this.meals.push(...meal);
  }

  public getMeal(): Meal[] | undefined {
    return this.meals;
  }

  public getRoute(): Route {
    return this.routes;
  }

}
