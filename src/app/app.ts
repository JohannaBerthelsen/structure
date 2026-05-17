import { Component, signal } from '@angular/core';
import {
  KirbyAppModule,
  ActionGroupComponent,
  PageComponent,
  PageContentComponent,
  HeaderActionsDirective,
  HeaderComponent,
  IconComponent,
  IconModule,
  ButtonComponent,
} from '@kirbydesign/designsystem';

import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [
    KirbyAppModule,
    PageComponent,
    PageContentComponent,
    TodoList,
    HeaderComponent,
    IconModule,
    ButtonComponent,
    ActionGroupComponent,
    HeaderActionsDirective,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('structure');
}
