import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMinImagemComponent } from './sobre-min-imagem.component';

describe('SobreMinImagemComponent', () => {
  let component: SobreMinImagemComponent;
  let fixture: ComponentFixture<SobreMinImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMinImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreMinImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
