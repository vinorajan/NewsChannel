import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbriefComponent } from './contactbrief.component';

describe('ContactbriefComponent', () => {
  let component: ContactbriefComponent;
  let fixture: ComponentFixture<ContactbriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactbriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactbriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
