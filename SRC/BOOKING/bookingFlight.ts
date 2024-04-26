import { Seat } from "../AIRPLANE/seat";
import { Flight } from "../FLIGHT/flight";
import { Meal } from "../MEAL/meal";
import { Bage } from "./bage";

export class BookingFlight{
    private meal:Meal[] = [];
    constructor(private flightNumber: Flight, private bage:Bage, private seat:Seat){
        this.flightNumber = flightNumber;
        this.bage = bage;
        this.seat = seat;
    }
}
