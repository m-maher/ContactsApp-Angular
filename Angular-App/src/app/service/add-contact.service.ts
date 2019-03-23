import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const contactUrl = environment.contactsUrl;

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  constructor(private _http: HttpClient) { }

  addContact(data) {
    return this._http.post(contactUrl + 'addcontact' , data)
  }
}
