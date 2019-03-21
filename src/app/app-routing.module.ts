import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path:'contacts', component:ContactsComponent },
  { path:'addContact', component:AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
