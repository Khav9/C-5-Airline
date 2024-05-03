import { Seat } from "../AIRPLANE/seat";
import { Flight } from "../FLIGHT/flight";
import { Meal } from "../MEAL/meal";
import { Bage } from "./bage";

export class BookingFlight {
    private meals: Meal[] = [];
    constructor(private flightNumber: Flight, private bage: Bage, private seat: Seat) {
        this.flightNumber = flightNumber;
        this.bage = bage;
        this.seat = seat;
    }

    public getFlight(): Flight {
        return this.flightNumber;
    }

    public addMeal(...meals: Meal[]): void {
        this.meals.push(...meals);
    }
}
