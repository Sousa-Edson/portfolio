import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMinVideoApresentacaoComponent } from './sobre-min-video-apresentacao.component';

describe('SobreMinVideoApresentacaoComponent', () => {
  let component: SobreMinVideoApresentacaoComponent;
  let fixture: ComponentFixture<SobreMinVideoApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMinVideoApresentacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreMinVideoApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
