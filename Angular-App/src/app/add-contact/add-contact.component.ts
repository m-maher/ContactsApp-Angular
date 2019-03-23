import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddContactService } from '../service/add-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  addContactData:any = {
    image:'',
    firstName:'',
    lastName:'',
    phone:'',
    code:'',
    email:''
  }

  constructor(private _router: Router , private _addContact: AddContactService) { }

  // function to add a new contact to the app after call it through add-contacts service

  addContacts(){
    return this._addContact.addContact(this.addContactData).subscribe(()=>{
      this._router.navigate(['contacts'])
    })
  }

  ngOnInit() {
  }

}
