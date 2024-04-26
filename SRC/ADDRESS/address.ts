export class Address {
    private city: string;
    private country: string;
  
    constructor(city: string, country: string) {
      this.city = city;
      this.country = country;
    }
    
    getCity(): string {
      return this.city;
    }
  
    getCountry(): string {
      return this.country;
    }
  }
  