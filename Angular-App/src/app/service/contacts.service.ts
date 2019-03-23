import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const contactsUrl = environment.contactsUrl;
const recentContactsData = environment.recentContactsUrl;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private _http: HttpClient) { }

  getContactsData(){
    return this._http.get(contactsUrl + 'contacts')
  }

  getRecentContactsData(){
    return this._http.get(recentContactsData)
  }

}
