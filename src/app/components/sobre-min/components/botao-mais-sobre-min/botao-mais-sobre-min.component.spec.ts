import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMaisSobreMinComponent } from './botao-mais-sobre-min.component';

describe('BotaoMaisSobreMinComponent', () => {
  let component: BotaoMaisSobreMinComponent;
  let fixture: ComponentFixture<BotaoMaisSobreMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoMaisSobreMinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoMaisSobreMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
