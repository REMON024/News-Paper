import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeditorComponent } from './customeditor.component';

describe('CustomeditorComponent', () => {
  let component: CustomeditorComponent;
  let fixture: ComponentFixture<CustomeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
