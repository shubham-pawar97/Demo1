import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User2ChildComponent } from './user2-child.component';

describe('User2ChildComponent', () => {
  let component: User2ChildComponent;
  let fixture: ComponentFixture<User2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User2ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
