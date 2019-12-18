import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaMedicosPage } from './lista-medicos.page';

describe('ListaMedicosPage', () => {
  let component: ListaMedicosPage;
  let fixture: ComponentFixture<ListaMedicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMedicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
