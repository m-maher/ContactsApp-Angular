import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../service/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:any = {}

  recentContactsData:any = {}

  constructor(private _contacts: ContactsService) { }

  getContacts(){
    return this._contacts.getContactsData().subscribe((data)=>{
      this.contactsData = data;
    })
  }

  getRecentContacts(){
    return this._contacts.getRecentContactsData().subscribe((data)=>{
      this.recentContactsData = data;
    })
  }

  ngOnInit() {
    this.getContacts()
    this.getRecentContacts()
  }

}
