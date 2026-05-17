import { Component } from '@angular/core';
import { CardComponent, CheckboxComponent, ItemComponent } from "@kirbydesign/designsystem";

@Component({
  selector: 'app-todo-list',
  imports: [ItemComponent, CheckboxComponent, CardComponent],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss'],
})
export class TodoList {

}
