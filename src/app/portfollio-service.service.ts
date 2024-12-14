import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from './models/experience';

@Injectable({
  providedIn: 'root'
})
export class PortfollioServiceService {

  constructor(private http: HttpClient) { }

  allSkills:any =  [] ;

  addSkill(skill:any):void { 
      this.allSkills.push(skill)
  }

  getExperienceData(): Observable<Experience[]> {
    return this.http.get<any[]>('/assets/workExperienceData.json'); 
  }

  getProfileData(): Observable<any[]> {
    return this.http.get<any[]>('/assets/personalDetails.json'); 
  }

  getAllSkills(): Observable<any[]> {
    return this.http.get<any[]>('/assets/skillsData.json'); 
  }

  getEducationData(): Observable<any[]> {
    return this.http.get<any[]>('/assets/educationDetails.json'); 
  }
}
