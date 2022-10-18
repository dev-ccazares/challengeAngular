import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiAuthUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

    create(u: any) {
        return this.http.post(`${this.apiAuthUrl}clients`, u).toPromise();
    }
    update(id: string, u: any) {
        return this.http.patch(`${this.apiAuthUrl}clients/${id}`, u).toPromise();
    }
    delete(id: string) {
        return this.http.delete(`${this.apiAuthUrl}clients/${id}`).toPromise();
    }
    get() {
        return this.http.get(`${this.apiAuthUrl}clients`).toPromise();
    }
    getOne(id: string) {
        return this.http.get(`${this.apiAuthUrl}clients/${id}`).toPromise();
    }
}
