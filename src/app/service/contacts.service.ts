import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const contactsData = environment.contactsData;
const recentContactsData = environment.recentContactsData;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private _http: HttpClient) { }

  getContactsData(){
    return this._http.get(contactsData)
  }

  getRecentContactsData(){
    return this._http.get(recentContactsData)
  }

}
