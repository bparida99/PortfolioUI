import { Component } from '@angular/core';
import { PortfollioServiceService } from '../portfollio-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

details:any ={name:"",bio:"",linkedInUrl:"",email:"",github:""};

constructor(private service: PortfollioServiceService) {}

ngOnInit(): void {
  this.service.getProfileData().subscribe((response) => {
    this.details = response[0];
  });
}

}
