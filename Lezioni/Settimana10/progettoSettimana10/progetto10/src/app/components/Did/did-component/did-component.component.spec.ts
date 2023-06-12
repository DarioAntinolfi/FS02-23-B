import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidComponentComponent } from './did-component.component';

describe('DidComponentComponent', () => {
  let component: DidComponentComponent;
  let fixture: ComponentFixture<DidComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
