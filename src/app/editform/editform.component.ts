import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  @Input() skills: String;
  @Input() education: String;
  @Input() experiences: String;
  @Input() misc: String;
  @Input() others: String;
  constructor() { }

  ngOnInit() {
  }

}
