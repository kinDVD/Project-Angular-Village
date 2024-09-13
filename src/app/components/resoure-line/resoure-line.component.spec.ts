import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoureLineComponent } from './resoure-line.component';

describe('ResoureLineComponent', () => {
  let component: ResoureLineComponent;
  let fixture: ComponentFixture<ResoureLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResoureLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResoureLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
