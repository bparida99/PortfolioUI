import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { DisplayAllSkillsComponent } from './display-all-skills/display-all-skills.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'add-skill', component:AddSkillComponent},
  {path: 'technical-skills', component:DisplayAllSkillsComponent},
  {path: 'education', component:EducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
