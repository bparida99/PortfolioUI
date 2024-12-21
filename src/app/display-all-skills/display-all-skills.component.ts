import { Component } from '@angular/core';
import { PortfollioServiceService } from '../portfollio-service.service';

@Component({
  selector: 'app-display-all-skills',
  templateUrl: './display-all-skills.component.html',
  styleUrls: ['./display-all-skills.component.css']
})
export class DisplayAllSkillsComponent {

  skills:any = [];
  filteredSkills:any = [];
  
  errorMsg:string = '';
  constructor(private service: PortfollioServiceService ) {}

  ngOnInit(): void {
    this.service.getAllSkills().subscribe((response) => {
      this.skills = response;
      this.filteredSkills = this.skills;
      if(this.skills.length == 0) {
        this.errorMsg = 'No skills found'
      }
      },
    error=>{
      this.errorMsg = 'Unable to fetch skills'
    } ); 
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();
    this.filteredSkills = this.skills.filter(
      (skill:any)=>skill.details.toLowerCase().includes(searchTerm)
    );
  }
}
