import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElvisComponent } from './elvis/elvis.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [{
  path:'elvis', component: ElvisComponent
},
{
path: 'user', component: UserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
