import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriaisUtilizadosPage } from './materiais-utilizados.page';

describe('MateriaisUtilizadosPage', () => {
  let component: MateriaisUtilizadosPage;
  let fixture: ComponentFixture<MateriaisUtilizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaisUtilizadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriaisUtilizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
