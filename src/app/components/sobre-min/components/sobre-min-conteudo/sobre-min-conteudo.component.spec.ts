import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMinConteudoComponent } from './sobre-min-conteudo.component';

describe('SobreMinConteudoComponent', () => {
  let component: SobreMinConteudoComponent;
  let fixture: ComponentFixture<SobreMinConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMinConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreMinConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
