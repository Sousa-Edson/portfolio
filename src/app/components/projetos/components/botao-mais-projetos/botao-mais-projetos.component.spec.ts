import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMaisProjetosComponent } from './botao-mais-projetos.component';

describe('BotaoMaisProjetosComponent', () => {
  let component: BotaoMaisProjetosComponent;
  let fixture: ComponentFixture<BotaoMaisProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoMaisProjetosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoMaisProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
