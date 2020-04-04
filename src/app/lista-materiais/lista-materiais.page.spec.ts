import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaMateriaisPage } from './lista-materiais.page';

describe('ListaMateriaisPage', () => {
  let component: ListaMateriaisPage;
  let fixture: ComponentFixture<ListaMateriaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMateriaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMateriaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
