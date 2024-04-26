import { Seat } from "./seat";

export class Plane {
    private seats:Seat[] = [];
    constructor(private planeId: string) {
        this.planeId = planeId;
    }
}