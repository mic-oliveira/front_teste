import {AddressInterface} from '../interfaces/address-interface';
import {Neighborhood} from './neighborhood';

export class Address implements AddressInterface {
  zipcode = '00000-000';
  address_type = 1;
  neighborhood: Neighborhood = new Neighborhood();
  public_place = '';
}
