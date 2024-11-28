import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoGithubComponent } from './botao-github.component';

describe('BotaoGithubComponent', () => {
  let component: BotaoGithubComponent;
  let fixture: ComponentFixture<BotaoGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoGithubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
