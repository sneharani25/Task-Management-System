import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId! : string;
  // userName !: string;

  get userName(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelect(id: string){
    this.selectedUserId = id;
    console.log("this.id is", id);  
  }
}
