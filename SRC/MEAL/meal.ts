export class Meal {
    constructor(private name: string, private price:number) {
        this.name = name;
        this.price = price;
    }
    public getName():string{
        return this.name;
    }
}