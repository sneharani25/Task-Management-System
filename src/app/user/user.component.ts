import { Component, computed, EventEmitter, Input, input, Output, output, Type } from '@angular/core';
import { User } from '../userType';

/* type user = {
    avatar : string;
    name : string;
    id : string ;
} */

interface User{
  avatar : string;
  name : string;
  id : string ;
}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User
  // @Input() avatar! : string ;
  // @Input() name! : string;
  // @Input() id! : string ; 

  // @Input() user !: {
  //   avatar : string ;
  //   name : string;
  //   id : string ;
  // }
  // @Output() select = new EventEmitter();
  select = output<string>();
  @Output() userClicked = new EventEmitter<String>();

  get imagePath(){
    return "../../assets/users/"+this.user.avatar;
  }

  /* avatar = input<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return "../../assets/users/"+this.avatar();
  }) */

  onSelectUser() {
    this.select.emit(this.user.id);
  }
  onClickUserName(){
    this.userClicked.emit(this.user.name);
  }
}
