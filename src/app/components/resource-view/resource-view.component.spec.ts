import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceViewComponent } from './resources-views.component';

describe('ResourcesViewsComponent', () => {
  let component: ResourceViewComponent;
  let fixture: ComponentFixture<ResourceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
