import { Component, Signal, signal, WritableSignal } from '@angular/core';
import {
  CardComponent,
  CheckboxComponent,
  ItemComponent,
} from '@kirbydesign/designsystem';
import { IconModule } from '@kirbydesign/designsystem/icon';

@Component({
  selector: 'app-todo-list',
  imports: [ItemComponent, CheckboxComponent, CardComponent, IconModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss'],
})
export class TodoList {
  protected readonly isChecked: WritableSignal<boolean> = signal(false);

  protected onCheckboxChange = (checked: boolean): void => {
    this.isChecked.set(checked);
  };
}
