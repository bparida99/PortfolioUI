import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddSkillComponent } from './add-skill.component';
import { PortfollioServiceService } from '../portfollio-service.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddSkillComponent', () => {
  let component: AddSkillComponent;
  let fixture: ComponentFixture<AddSkillComponent>;
  let mockService: jasmine.SpyObj<PortfollioServiceService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('PortfollioServiceService', ['addSkill']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [AddSkillComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule],
      providers: [
        { provide: PortfollioServiceService, useValue: mockService },
        { provide: Router, useValue: mockRouter },
        FormBuilder
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set proficiency to Beginner for progress between 1 and 50', () => {
    const result = component.checkProficiency(40)
    expect(result).toBe('Beginner');
  });

  it('should set proficiency to Knowledgeable for progress between 51 and 69', () => {
    const result = component.checkProficiency(55)
    expect(result).toBe('Knowledgeable');
  });

});
