import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPortalLayoutComponent } from './new-portal-layout.component';

describe('NewPortalLayoutComponent', () => {
  let component: NewPortalLayoutComponent;
  let fixture: ComponentFixture<NewPortalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPortalLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPortalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
