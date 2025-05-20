import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input() avatar! : string ;
  // @Input() name! : string;

  // get imagePath(){
  //   return "../../assets/users/"+this.avatar;
  // }

  avatar = input<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return "../../assets/users/"+this.avatar();
  })

  onSelectUser() {}
}
