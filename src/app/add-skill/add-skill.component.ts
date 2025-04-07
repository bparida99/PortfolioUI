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

  errorOccured:boolean = false;
  errorMsg:string = ''

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
      this.skillData.proficiency = this.checkProficiency(this.skillData.progress);
      this.service.addSkill(this.skillData).subscribe((data: any)=>{
        this.goToSkillsPage(); 
      }, ()=>{
        this.errorOccured = true;
        this.errorMsg = 'Unable to add skill at this time, please try again later.';
      });
      
    } else {
      console.log('Form is not valid');
    }
  }

  checkProficiency(data:any){
    if(data>1 && data<50){
      return 'Beginner'
    }
    else if(data>=50 && data<70){
      return 'Knowledgeable'
    }
    else if(data>=70){
      return 'Proficient'
    }else{
      return 'Beginner'
    }
  }

  goToSkillsPage() {
    this.router.navigate(['/technical-skills']);
  }

}
