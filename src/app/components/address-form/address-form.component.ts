import {Component, Input, OnInit} from '@angular/core';
import {ZipcodeSearchService} from '../../dataService/zipcode-search.service';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, delay} from 'rxjs/operators';
import {AddressInterface} from '../../interfaces/address-interface';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() address: AddressInterface;
  addressInfo = new BehaviorSubject(null);
  constructor(private zipcodeService: ZipcodeSearchService) { }

  ngOnInit(): void {
    this.addressInfo.pipe(debounceTime(1000)).subscribe(nextval => {
      if (nextval) {
        this.zipcodeService.search(nextval).subscribe((info: any) => {
          this.address.public_place = info.logradouro ?? null;
          this.address.neighborhood = info.bairro ?? null;
          this.address.city = info.localidade ?? null;
        })
      }
    });
  }

  searchZipcode(zipcode) {
    this.addressInfo.next(zipcode);
  }
}
