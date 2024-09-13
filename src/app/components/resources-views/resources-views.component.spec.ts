import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesViewsComponent } from './resources-views.component';

describe('ResourcesViewsComponent', () => {
  let component: ResourcesViewsComponent;
  let fixture: ComponentFixture<ResourcesViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
