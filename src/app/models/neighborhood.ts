import {City} from './city';

export class Neighborhood {
  id: any;
  name: string;
  city: City = new City();
  constructor() {
    this.name = ''
  }
}
