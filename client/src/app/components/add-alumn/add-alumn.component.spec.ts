import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlumnComponent } from './add-alumn.component';

describe('AddAlumnComponent', () => {
  let component: AddAlumnComponent;
  let fixture: ComponentFixture<AddAlumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlumnComponent]
    });
    fixture = TestBed.createComponent(AddAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
