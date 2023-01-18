import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  constructor(private http: HttpClient) {}

  getExperience(): Observable<any> {
    return this.http.get(`./assets/experience/resume.json`);
  }
}
