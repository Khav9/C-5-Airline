class Flight {
    private flightNumber: string;
    private passengers: Passenger[];
    private meals: Meal[];
    private gate: Gate;
  
    constructor(flightNumber: string, passengers: Passenger[], meals: Meal[], gate: Gate) {
      this.flightNumber = flightNumber;
      this.passengers = passengers;
      this.meals = meals;
      this.gate = gate;
    }
  
    getFlightNumber(): string {
      return this.flightNumber;
    }
  
    getPassengers(): Passenger[] {
      return this.passengers.slice();
    }
  
    boardPassengers(passengers: Passenger[]) {
      this.passengers = this.passengers.concat(passengers);
    }
  
    getMeals(): Meal[] {
      return this.meals.slice();
    }
  
    serveMeals(meals: Meal[]) {
      this.meals = this.meals.concat(meals);
    }
  
    getGate(): Gate {
      return this.gate;
    }
  }
  
  class Passenger {
    private name: string;
    private seatNumber: number;
  
    constructor(name: string, seatNumber: number) {
      this.name = name;
      this.seatNumber = seatNumber;
    }
  
    getName(): string {
      return this.name;
    }
  
    getSeatNumber(): number {
      return this.seatNumber;
    }
  }
  
  class Meal {
    private type: string;
  
    constructor(type: string) {
      this.type = type;
    }
  
    getType(): string {
      return this.type;
    }
  }
  
  // class Gate {
  //   private location: string;
  
  //   constructor(location: string) {
  //     this.location = location;
  //   }
  
  //   getLocation(): string {
  //     return this.location;
  //   }
  // }
  
  // let flight = new Flight("UA123", [], [], new Gate("B17"));
  // flight.boardPassengers([
  //   new Passenger("Khav", 1),
  //   new Passenger("Ng", 2),
  // ]);
  // flight.serveMeals([new Meal("Chicken"), new Meal("Fish")]);
  
  // console.log(flight);