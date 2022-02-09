import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerFormComponent} from './customer-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {BrowserTestingModule} from '@angular/platform-browser/testing';
import {
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateParser,
  TranslatePipe,
  TranslateService,
  TranslateStore
} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserTestingModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NgbModule,
        TranslateModule.forRoot({
        })
      ],
      declarations: [ CustomerFormComponent, TranslatePipe ],
      providers: [
        FormBuilder,
        TranslatePipe,
        TranslateService,
        TranslateLoader,
        TranslateStore,
        TranslateCompiler,
        TranslateParser,
        MissingTranslationHandler,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
