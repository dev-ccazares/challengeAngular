import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientsService } from '../clients.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clients } from '../clients';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  load: boolean = true;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'address',
    '_id',

  ];
  data: string[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  active = false;
  isLoading = true;
  groups: any= [];
  baseReports!: Clients[];

  constructor(
    private clientsService:ClientsService,
    public clients: MatTableDataSource<any>,
    private toastr: ToastrService
  ) 
  { 
    this.clients = new MatTableDataSource(this.baseReports);
  }

  get(){
    this.clientsService.get().then((resp: any) => {
      this.clients = new MatTableDataSource(resp);
      this.load = false;
    });
  }

  delete(id: string){
    this.load = true;
    this.clientsService.delete(id).then(() => {
      this.load = false;
      this.toastr.success('Cliente eliminado con exito');
      this.get();
    });
  }

  ngOnInit() {
    this.get();
  }

}
