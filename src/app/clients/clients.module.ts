import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../material.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { NewUpdateComponent } from './new-update/new-update.component';
import { ListComponent } from './list/list.component';
import { ClientsService } from './clients.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewUpdateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    MaterialModule
  ],
  providers: [ClientsService,MatTableDataSource],
})
export class ClientsModule { }
