import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public getTodos(): Todo[] {
    return [
      { id: 1, title: 'Todo 1', description: 'Description 1' },
      { id: 2, title: 'Todo 2', description: 'Description 2' },
      { id: 3, title: 'Todo 3', description: 'Description 3' },
      { id: 123, title: 'Todo 4', description: 'Description 4' },
    ];
  }

  constructor() {}

  public getTodoById(id: number): Observable<Todo | undefined> {
    return of(this.getTodos().find((todo) => todo.id === id));
  }
}
