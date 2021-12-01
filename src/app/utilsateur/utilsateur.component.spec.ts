import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsateurComponent } from './utilsateur.component';

describe('UtilsateurComponent', () => {
  let component: UtilsateurComponent;
  let fixture: ComponentFixture<UtilsateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilsateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilsateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
