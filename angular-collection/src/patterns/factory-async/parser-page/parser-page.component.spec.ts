import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParserPageComponent } from './parser-page.component';

describe('ParserPageComponent', () => {
  let component: ParserPageComponent;
  let fixture: ComponentFixture<ParserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParserPageComponent]
    });
    fixture = TestBed.createComponent(ParserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
