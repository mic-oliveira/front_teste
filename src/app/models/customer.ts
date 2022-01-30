import {PersonInterface} from '../interfaces/person-interface';
import {AddressInterface} from '../interfaces/address-interface';
import {Address} from './address';

export class Customer implements PersonInterface {
  addresses: Array<AddressInterface> = new Array<Address>();
  birthdate: Date;
  id: string;
  name: string;
  status: number;


  constructor() {
    this.addresses.push(new Address())
    this.status = 1;
  }
}
