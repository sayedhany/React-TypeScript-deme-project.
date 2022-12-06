import { useRef } from "react";
// import Todo from "../models/todo";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputTextRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputTextRef.current!.value;
    if (enteredText.trim().length === 0) return;
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={todoInputTextRef} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};
export default NewTodo;
