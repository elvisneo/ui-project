import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvisComponent } from './elvis.component';

describe('ElvisComponent', () => {
  let component: ElvisComponent;
  let fixture: ComponentFixture<ElvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
