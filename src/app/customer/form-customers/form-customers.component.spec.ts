import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomersComponent } from './form-customers.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

describe('FormCustomersComponent', () => {
  let component: FormCustomersComponent;
  let fixture: ComponentFixture<FormCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ FormCustomersComponent ],
      providers: [
        FormBuilder,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
