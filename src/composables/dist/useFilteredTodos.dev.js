"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFilteredTodos;

var _vue = require("vue");

function useFilteredTodos(todos) {
  var filter = (0, _vue.ref)("all"); //过滤 todo

  var filteredTodos = (0, _vue.computed)(function () {
    switch (filter.value) {
      case "done":
        return todos.value.filter(function (todo) {
          return todo.completed;
        });

      case "todo":
        return todos.value.filter(function (todo) {
          return !todo.completed;
        });

      default:
        return todos.value;
    }
  });
  return {
    filter: filter,
    filteredTodos: filteredTodos
  };
}