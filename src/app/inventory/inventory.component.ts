import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  resumes : Resume[] = []
  getResumes():void{
    this.apiService.getResumes().subscribe(data => {this.process(data)})
  }
  process(data : Resume[]):void{
    console.log(data)
    this.resumes = data
  }
  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit() {
  }

}
