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

  term:any;

  constructor(private _contacts: ContactsService) { }

  // function to get all contacts data from contacts service

  getContacts(){
    return this._contacts.getContactsData().subscribe((data)=>{
      this.contactsData = data;
    })
  }

  // function to get recent contacts data from contacts service

  getRecentContacts(){
    return this._contacts.getRecentContactsData().subscribe((data)=>{
      this.recentContactsData = data;
    })
  }

  // Call the two function when use this class 

  ngOnInit() {
    this.getContacts()
    this.getRecentContacts()
  }

}
