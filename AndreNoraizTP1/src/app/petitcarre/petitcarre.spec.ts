import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Petitcarre } from './petitcarre';

describe('Petitcarre', () => {
  let component: Petitcarre;
  let fixture: ComponentFixture<Petitcarre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Petitcarre],
    }).compileComponents();

    fixture = TestBed.createComponent(Petitcarre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
