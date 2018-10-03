import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { TodoAppComponent } from './todo-app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAdderComponent } from './todo-adder/todo-adder.component';

@NgModule({
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    FormsModule   
  ],
  declarations: [TodoAppComponent, TodoListComponent, TodoAdderComponent]
})
export class TodoAppModule { }
