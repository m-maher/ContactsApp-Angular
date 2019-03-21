import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const contactData = environment.contactsData;

let headers = new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  constructor(private _http: HttpClient) { }

  addContact(data) {
    let body = JSON.stringify(data);
    return this._http.post(contactData , body , { headers })
  }
}
