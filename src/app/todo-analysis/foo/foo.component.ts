import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoService } from '../../todo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
})
export class FooComponent implements OnInit {
  private acivated: ActivatedRoute = inject(ActivatedRoute);
  private todoService: TodoService = inject(TodoService);
  public selectedTodo: Todo;

  ngOnInit(): void {
    this.acivated.params.subscribe((params) => {
      this.todoService.getTodoById(Number(params['id'])).subscribe((todo) => {
        console.log('todo', todo)
        this.selectedTodo = todo;
        console.log("selectedTodo", this.selectedTodo)
      });
    });
  }
}
