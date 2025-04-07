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
  const mockService = {
    addSkill: jasmine.createSpy('addSkill').and.returnValue({
      subscribe: (success: Function, error?: Function) => success({})
    })
  };
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
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

  it('should initialize the form with validators', () => {
    expect(component.form.valid).toBeFalsy();
    expect(component.form.controls['skill'].hasError('required')).toBeTrue();
    expect(component.form.controls['details'].hasError('required')).toBeTrue();
    expect(component.form.controls['progress'].hasError('required')).toBeTrue();
  });

  it('should set proficiency to Beginner for progress between 1 and 50', () => {
    component.form.controls['progress'].setValue(40);
    component.form.controls['skill'].setValue('Java');
    component.form.controls['details'].setValue('Programming');
    component.onSubmit();
    expect(component.skillData.proficiency).toBe('Beginner');
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
