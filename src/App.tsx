import Todoes from "./components/Todoes";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new todo("Learn React"), new todo("Lrean typeScript")];
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoId: string) =>{
    setTodos(prev => {
      return prev.filter(item => item.id !==todoId);
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todoes onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
