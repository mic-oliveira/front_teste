import {Neighborhood} from '../models/neighborhood';

export interface AddressInterface {
  id?: any;
  address_type?;
  complement?;
  neighborhood: Neighborhood;
  number?;
  public_place?;
  zipcode?;
}
