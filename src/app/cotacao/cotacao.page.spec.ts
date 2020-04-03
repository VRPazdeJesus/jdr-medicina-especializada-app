import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CotacaoPage } from './cotacao.page';

describe('CotacaoPage', () => {
  let component: CotacaoPage;
  let fixture: ComponentFixture<CotacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CotacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
