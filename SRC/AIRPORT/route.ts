class Route {
    private departure: string;
    private arrival: string;

    constructor (departure: string, arrival: string) {
        this.departure = departure;
        this.arrival = arrival;
    }
    getDeparture(): string {
        return this.departure;
    }
    getArrival(): string {
        return this.arrival;
    }
}
