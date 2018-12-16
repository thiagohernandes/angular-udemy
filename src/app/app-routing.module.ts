import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InsertComponent } from './index/insert/insert.component';
import { EditComponent } from './index/edit/edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'novo', component: InsertComponent },
    { path: ':id/edit', component: EditComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
