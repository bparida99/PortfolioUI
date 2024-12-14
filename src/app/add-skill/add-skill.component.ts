import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfollioServiceService } from '../portfollio-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {

  form: FormGroup;

  skillData:any = {};
  proficiency:any="";

  constructor(private fb: FormBuilder, 
    private service: PortfollioServiceService,private router: Router) {
    this.form = this.fb.group({
      skill: ['', [Validators.required, Validators.minLength(3)]],
      details: ['', [Validators.required, Validators.minLength(3)]],
      progress: ['', [Validators.required, Validators.min(1),Validators.max(100)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.skillData  = this.form.value;
      if(this.skillData.progress>1 && this.skillData.progress<50){
        this.skillData.proficiency = 'Beginner'
      }
      if(this.skillData.progress>=50 && this.skillData.progress<70){
        this.skillData.proficiency = 'Knowledgeable'
      }
      if(this.skillData.progress>=70){
        this.skillData.proficiency = 'Proficient'
      }
      this.service.addSkill(this.skillData)
      this.goToSkillsPage(); 
    } else {
      console.log('Form is not valid');
    }
  }

  goToSkillsPage() {
    this.router.navigate(['/technical-skills']);
  }
}
