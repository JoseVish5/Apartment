import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBuilderComponent } from './about-builder.component';

describe('AboutBuilderComponent', () => {
  let component: AboutBuilderComponent;
  let fixture: ComponentFixture<AboutBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
