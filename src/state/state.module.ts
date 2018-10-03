import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from '@state/counter/counter.reducer';
import { todoListReducer } from '@state/todo-list/todo-list.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        StoreModule.forRoot({
            count: counterReducer,
            todoList: todoListReducer
        }),
        StoreDevtoolsModule.instrument()
    ]
})
export class StateModule { }