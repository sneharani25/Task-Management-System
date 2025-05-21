import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar! : string ;
  @Input() name! : string;
  @Input() id! : string ; 
  @Output() select = new EventEmitter();

  get imagePath(){
    return "../../assets/users/"+this.avatar;
  }

  /* avatar = input<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return "../../assets/users/"+this.avatar();
  }) */

  onSelectUser() {
    this.select.emit(this.id);
  }
}
