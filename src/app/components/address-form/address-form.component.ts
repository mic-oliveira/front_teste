import {Component, Input, OnInit} from '@angular/core';
import {ZipcodeSearchService} from '../../dataService/zipcode-search.service';
import {BehaviorSubject, of} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {AddressInterface} from '../../interfaces/address-interface';
import {CitiesService} from '../../dataService/cities.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() address: AddressInterface;
  addressInfo = new BehaviorSubject(null);
  cities;
  constructor(private zipcodeService: ZipcodeSearchService, private citiesService: CitiesService) {
  }

  ngOnInit(): void {
    this.addressInfo.pipe(debounceTime(1000)).subscribe(nextval => {
      if (nextval) {
        this.zipcodeService.search(nextval).subscribe((info: any) => {
          this.address.public_place = info.logradouro.toUpperCase() ?? null;
          this.address.neighborhood = info.bairro.toUpperCase() ?? null;
          this.address.city = info.localidade.toUpperCase() ?? null;
        })
      }
    });
    this.loadCities();
  }

  loadCities() {
    this.citiesService.list().subscribe((cities: any) => {
      console.log(cities.data)
      this.cities = of(cities.data)
    });
  }

  searchZipcode(zipcode) {
    this.addressInfo.next(zipcode);
  }
}
