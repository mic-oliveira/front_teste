import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HorizontalMenuComponent} from './horizontal-menu.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateFakeLoader, TranslateLoader,
  TranslateModule,
  TranslateParser, TranslatePipe,
  TranslateService,
  TranslateStore
} from '@ngx-translate/core';
import {InjectionToken} from '@angular/core';

describe('HorizontalMenuComponent', () => {
  let component: HorizontalMenuComponent;
  let fixture: ComponentFixture<HorizontalMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: TranslateFakeLoader,
          compiler: TranslateFakeLoader,
          defaultLanguage: 'en-US'
        })
      ],
      declarations: [ HorizontalMenuComponent ],
      providers: [
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
