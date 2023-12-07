import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrolComponent } from './brol.component';

describe('BrolComponent', () => {
  let component: BrolComponent;
  let fixture: ComponentFixture<BrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
