import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {

formData : FormData
fileUploadProgress: string = null;
resumeName : string = 'pdf, doc or docx ...';
loadedResume : boolean = false
edit : boolean = false;
skills: String;
education: String ;
experience: String;
loaded : number = 0
total : number = 0
misc: String;
others: String;
constructor(private apiService:ApiService) { }
 
fileProgress(fileInput: any) {
    this.formData = new FormData(); 
    const resume = <File>fileInput.target.files[0];
    this.formData.append('file', resume);
    this.resumeName = resume.name
    this.loadedResume = true
}

onSubmit(event : any) {
  event.preventDefault();
  this.fileUploadProgress = '0%';

  this.apiService.uploadResume(this.formData)
  .subscribe(
    (event)  => {
    if(event.type === HttpEventType.UploadProgress) 
    {
      this.fileUploadProgress = Math.round(event.loaded / event.total * 100) + '%';
      console.log('progress is ' + this.fileUploadProgress);
      console.log(event);
    } 
    else if(event.type === HttpEventType.Response) 
    {
      this.fileUploadProgress = '';
      console.log(event.body);          
      //alert('Uploaded succesfully');
      
      this.edit=true;
      this.skills = event.body.blocs.skills
      this.education = event.body.blocs.education
      this.experience = event.body.blocs.xp
      this.others = event.body.blocs.nocat
      //this.misc =  JSON.stringify(event.body.blocs.others).toString();
      this.misc = event.body.blocs.others
    }      
  },
  this.resumeName = '',)
}

  ngOnInit(): void {
  }

}
