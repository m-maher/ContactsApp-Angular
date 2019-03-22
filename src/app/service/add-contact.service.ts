import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const contactUrl = environment.contactsUrl;

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private _http: HttpClient) { }

  addContact(data) {
    let body = JSON.stringify(data);
    return this._http.post(contactUrl , body , { headers: this.headers })
  }
}
