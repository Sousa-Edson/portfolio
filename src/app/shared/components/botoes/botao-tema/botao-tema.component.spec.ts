import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTemaComponent } from './botao-tema.component';

describe('BotaoTemaComponent', () => {
  let component: BotaoTemaComponent;
  let fixture: ComponentFixture<BotaoTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoTemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
