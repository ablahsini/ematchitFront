import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParserRoutingModule } from './parser-routing.module';
import { ParserComponent } from './parser.component';
import { EditformComponent } from '../editform/editform.component';


@NgModule({
  declarations: [ParserComponent, EditformComponent],
  imports: [
    CommonModule,
    ParserRoutingModule
  ]
})
export class ParserModule { }
