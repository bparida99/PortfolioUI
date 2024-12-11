import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddSkillComponent } from './add-skill/add-skill.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'add-skill', component:AddSkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
