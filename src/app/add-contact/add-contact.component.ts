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
    number:'',
    code:'',
    email:''
  }

  constructor(private _router: Router , private _addContact: AddContactService) { }

  addContacts(){
    return this._addContact.addContact(this.addContactData).subscribe((data)=>{
      console.log(data)
    },()=>{
      this._router.navigate(['contacts'])
    })
  }

  ngOnInit() {
  }

}
