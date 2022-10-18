import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewUpdateComponent } from './new-update/new-update.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/clients/list',
    pathMatch: 'full' 
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
      path: 'add',
      component: NewUpdateComponent,
  },
  {
      path: 'update/:id',
      component: NewUpdateComponent,
  },
  {
      path: '',
      component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
