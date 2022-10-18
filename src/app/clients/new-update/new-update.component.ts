import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../clients';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-update',
  templateUrl: './new-update.component.html',
  styleUrls: ['./new-update.component.css']
})
export class NewUpdateComponent implements OnInit {
  id: string = '';
  title: string = 'Crear';
  load: boolean = true;
  constructor(
    private clientsService:ClientsService,
    private form: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
    ClientForm: FormGroup = this.form.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
  });
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (this.id) {
        this.title = 'Actualizar';
          this.clientsService.getOne(this.id).then((data: any)=>{
            this.ClientForm.reset({ ...data });
            this.load = false;
          })
      }else{
        this.load = false;
      }
    });
  }

  save(){
    if (this.ClientForm.valid) {
      this.load = true;
      if (this.id) {
        this.clientsService.update(this.id,this.ClientForm.value).then(()=>{
          this.ClientForm.reset();
          this.load = false;
          this.toastr.success('Cliente actulizado con exito');
          this.router.navigateByUrl('/clients/list');
      })
      }else {
        this.clientsService.create(this.ClientForm.value).then(()=>{
          this.ClientForm.reset();
          this.load = false;
          this.toastr.success('Cliente creado con exito');
          this.router.navigateByUrl('/clients/list');
      })
      }
    } else {
      this.toastr.warning('Formulario incompleto!');
    }
  }

}
