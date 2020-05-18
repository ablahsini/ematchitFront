import { Injectable } from '@angular/core';
import { Resume } from './resume';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private resumeUrl = 'http://127.0.0.1:5000/resumes'
  private postResumeUrl = 'http://127.0.0.1:5000/process'
  constructor(
    private http:HttpClient
  ) { }
  getResumes(): Observable<Resume[]> {
    return this.http.get(this.resumeUrl).pipe(
      map(x => x['result'])
    )
  }
  uploadResume(formdata : FormData): any {
    return this.http.post(this.postResumeUrl, formdata, {
    reportProgress: true,
    observe: 'events'   
  })
  
  }
}
