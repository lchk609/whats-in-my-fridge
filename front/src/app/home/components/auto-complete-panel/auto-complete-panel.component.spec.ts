import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompletePanelComponent } from './auto-complete-panel.component';

describe('AutoCompletePanelComponent', () => {
  let component: AutoCompletePanelComponent;
  let fixture: ComponentFixture<AutoCompletePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoCompletePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompletePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
