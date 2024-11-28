import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApresentacaoComponent } from './header-apresentacao.component';

describe('HeaderApresentacaoComponent', () => {
  let component: HeaderApresentacaoComponent;
  let fixture: ComponentFixture<HeaderApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderApresentacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
