import { CanActivateFn } from '@angular/router';
import { Todo, TodoService } from '../todo.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const todoServicec: TodoService = inject(TodoService);
  const todoId = Number(route.params['id']);
  return todoServicec.getTodoById(todoId).pipe(
    map((todo) => {
      if (todo.title === 'Todo 4') {
        return true;
      } else {
        return false;
      }
    })
  );

};
