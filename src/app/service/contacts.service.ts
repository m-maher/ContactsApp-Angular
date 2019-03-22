import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const contactsUrl = environment.contactsUrl;
const recentContactsData = environment.recentContactsUrl;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private _http: HttpClient) { }

  getContactsData():Observable<any>{
    return this._http.get(contactsUrl)
  }

  getRecentContactsData():Observable<any>{
    return this._http.get(recentContactsData)
  }

}
