import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaMateriaisInstrumentadorPage } from './lista-materiais-instrumentador.page';

describe('ListaMateriaisInstrumentadorPage', () => {
  let component: ListaMateriaisInstrumentadorPage;
  let fixture: ComponentFixture<ListaMateriaisInstrumentadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMateriaisInstrumentadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMateriaisInstrumentadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
