import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndTapComponent } from './map-and-tap.component';

describe('MapAndTapComponent', () => {
  let component: MapAndTapComponent;
  let fixture: ComponentFixture<MapAndTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAndTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAndTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
