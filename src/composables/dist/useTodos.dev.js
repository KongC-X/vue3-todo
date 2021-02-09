"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTodos;

var _vue = require("vue");

function useTodos() {
  var todos = (0, _vue.ref)([]); //添加 todo

  var addTodo = function addTodo(todo) {
    return todos.value.push(todo);
  }; //获取远程 todos


  var fetchTodos = function fetchTodos() {
    var response, rawTodos;
    return regeneratorRuntime.async(function fetchTodos$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            rawTodos = _context.sent;
            todos.value = rawTodos.map(function (todo) {
              return {
                id: todo.id,
                content: todo.title,
                completed: todo.completed
              };
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  (0, _vue.onMounted)(function () {
    fetchTodos();
  });
  return {
    todos: todos,
    addTodo: addTodo
  };
}