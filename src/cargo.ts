import { faker } from "@faker-js/faker";
import { Entity } from "./TrackingMap";

export class Cargo implements Entity {
  trackingId: string;
  location: {
    lat: number;
    lon: number;
  };
  weight: number;

  constructor() {
    this.trackingId = faker.datatype.uuid();
    this.location = {
      lat: +faker.address.latitude(),
      lon: +faker.address.latitude(),
    };
  }
  
  popupText(): string {
    return `<h3>Tracking ID: ${this.trackingId}</h3>`
  }
}
