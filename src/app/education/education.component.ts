import { Component } from '@angular/core';
import { PortfollioServiceService } from '../portfollio-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList:any = [];

  constructor(private service:PortfollioServiceService) { }

  ngOnInit(): void {
    this.service.getEducationData().subscribe((response) => {
      this.educationList = response;
      }); 
  }
}
