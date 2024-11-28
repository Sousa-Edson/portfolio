import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLinkedinComponent } from './botao-linkedin.component';

describe('BotaoLinkedinComponent', () => {
  let component: BotaoLinkedinComponent;
  let fixture: ComponentFixture<BotaoLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoLinkedinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
