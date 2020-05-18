import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', redirectTo:'/home', pathMatch:'full'}, 
  {path: 'parser', loadChildren: () => import('./parser/parser.module').then(m => m.ParserModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  {path: '**', component : NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, NotfoundComponent]
