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
  baseUrl:any = 'http://localhost:8080/portfolio'

  addSkill(skill:any):any { 
      //this.allSkills.push(skill)
    return this.http.post<any>(this.baseUrl+'/addSkill', skill);

  }

  getExperienceData(): Observable<Experience[]> {
    return this.http.get<any[]>('/assets/workExperienceData.json'); 
  }

  getProfileData(): Observable<any[]> {
    return this.http.get<any[]>('/assets/personalDetails.json'); 
  }

  getAllSkills(): Observable<any[]> {
    //return this.http.get<any[]>('/assets/skillsData.json'); 
    return this.http.get<any[]>(this.baseUrl+'/getAllSkills');
  }

  getEducationData(): Observable<any[]> {
    return this.http.get<any[]>('/assets/educationDetails.json'); 
  }
}
