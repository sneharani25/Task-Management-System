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

  onSelect(id : string){
    console.log("this.id is", id);
    
  }
}
