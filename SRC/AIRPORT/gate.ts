export class Gate {
  private gateNumber: string;

  constructor(gateNumber: string) {
    this.gateNumber = gateNumber;
  }

  public getGateNumber(): string {
    return this.gateNumber;
  }
}
