import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllSkillsComponent } from './display-all-skills.component';

describe('DisplayAllSkillsComponent', () => {
  let component: DisplayAllSkillsComponent;
  let fixture: ComponentFixture<DisplayAllSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAllSkillsComponent]
    });
    fixture = TestBed.createComponent(DisplayAllSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
