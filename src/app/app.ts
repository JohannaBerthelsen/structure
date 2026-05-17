import { Component, signal } from '@angular/core';
import { TodoList } from "./todo-list/todo-list";
import { PageComponent, PageContentComponent } from "@kirbydesign/designsystem/page";
import { AppComponent as KirbyAppComponent } from '@kirbydesign/designsystem/kirby-app';

@Component({
  selector: 'app-root',
  imports: [KirbyAppComponent, PageComponent, PageContentComponent, TodoList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('structure');
}
