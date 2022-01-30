import {AddressInterface} from './address-interface';

export interface PersonInterface {
  id: string;
  name: string;
  birthdate: Date;
  status: number;
  addresses: Array<AddressInterface>;
}
