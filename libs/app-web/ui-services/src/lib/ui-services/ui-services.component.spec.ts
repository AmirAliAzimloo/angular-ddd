import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiServicesComponent } from './ui-services.component';

describe('UiServicesComponent', () => {
  let component: UiServicesComponent;
  let fixture: ComponentFixture<UiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
