import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTodosComponent } from './your-todos.component';

describe('YourTodosComponent', () => {
  let component: YourTodosComponent;
  let fixture: ComponentFixture<YourTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
