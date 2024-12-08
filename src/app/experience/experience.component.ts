import { Component } from '@angular/core';
import { PortfollioServiceService } from '../portfollio-service.service';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
 
  data: Experience[] = [];

  constructor(private service: PortfollioServiceService) {}
  ngOnInit(): void {
    this.service.getExperienceData().subscribe((response) => {
      this.data = response;
      console.log(response);
    });
  }

}
