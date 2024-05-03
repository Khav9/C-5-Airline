import { Address } from "../ADDRESS/address";
import { Gate } from "./gate";

export class Airport {
  constructor(private name: string, private address: Address, private gate: Gate) {
    this.name = name;
    this.address = address;
    this.gate = gate;
  }

  getName(): string {
    return this.name;
  }

  public getGate(): Gate {
    return this.gate;
  }
}
