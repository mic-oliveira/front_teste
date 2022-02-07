import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ZipcodeSearchService} from '../../dataService/zipcode-search.service';
import {BehaviorSubject, of} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {AddressInterface} from '../../interfaces/address-interface';
import {CitiesService} from '../../dataService/cities.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Address} from '../../models/address';
import {City} from '../../models/city';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() address: AddressInterface = new Address();
  @Output() output: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  addressInfo = new BehaviorSubject(null);
  addressForm: FormGroup;
  cities;
  constructor(private zipcodeService: ZipcodeSearchService, private citiesService: CitiesService, public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadZipcode();
    this.loadCities();
    this.formValidator();
  }

  loadZipcode() {
    this.addressInfo.pipe(debounceTime(1000)).subscribe(nextval => {
      if (nextval) {
        this.zipcodeService.search(nextval).subscribe((info: any) => {
          const city = this.searchCityByName(info.localidade);
          this.addressForm.patchValue({
            public_place: info.logradouro,
            neighborhood: {
              name: info.bairro,
              city: {
                id: city.id,
                name: city.name
              }
            }
          });
        })
      }
    });
  }

  loadCities() {
    this.citiesService.list().subscribe((cities: any) => {
      this.cities = cities.data
    }, () => {}, () => {
      this.formValidator();
    });
  }

  formValidator() {
    this.addressForm = this.formBuilder.group({
      id: [this.address.id],
      public_place: [this.address.public_place, Validators.required],
      zipcode: [this.address.zipcode, Validators.required],
      number: [this.address.number, Validators.required],
      neighborhood: this.formBuilder.group({
        name: [this.address.neighborhood.name],
        city: this.formBuilder.group({
          id: [this.address.neighborhood.city.id],
          name: [this.address.neighborhood.city.name],
        })
      })
    })
  }

  searchZipcode(zipcode) {
    this.addressInfo.next(zipcode);
  }

  submitAdrress() {
    this.output.emit(this.addressForm);
  }

  resetForm(address?: AddressInterface) {
    this.address = address;
    this.addressForm.reset(address)
  }

  searchCityByName(cityName) {
    return this.cities.find((city: City) => city.name === cityName.toUpperCase());
  }
}
