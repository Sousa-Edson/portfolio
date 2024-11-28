import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImagemComponent } from './header-imagem.component';

describe('HeaderImagemComponent', () => {
  let component: HeaderImagemComponent;
  let fixture: ComponentFixture<HeaderImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
