import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from './models/experience';

@Injectable({
  providedIn: 'root'
})
export class PortfollioServiceService {

  constructor(private http: HttpClient) { }

  getExperienceData(): Observable<Experience[]> {
    return this.http.get<any[]>('/assets/workExperienceData.json'); 
  }

  getProfileData(): Observable<any[]> {
    return this.http.get<any[]>('/assets/personalDetails.json'); 
  }
}
