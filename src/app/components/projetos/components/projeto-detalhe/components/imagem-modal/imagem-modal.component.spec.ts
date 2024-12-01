import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemModalComponent } from './imagem-modal.component';

describe('ImagemModalComponent', () => {
  let component: ImagemModalComponent;
  let fixture: ComponentFixture<ImagemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagemModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
