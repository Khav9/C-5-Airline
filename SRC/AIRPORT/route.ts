import { Airport } from "./airport";

export class Route {
    private departure: string;
    private arrival: string;
    private airport: Airport;

    constructor(departure: string, arrival: string, airport: Airport) {
        this.departure = departure;
        this.arrival = arrival;
        this.airport = airport;
    }

    getDeparture(): string {
        return this.departure;
    }
    getArrival(): string {
        return this.arrival;
    }

    public getAirport(): Airport {
        return this.airport;
    }
}
