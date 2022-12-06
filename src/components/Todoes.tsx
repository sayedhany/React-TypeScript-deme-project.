import React, { Fragment } from "react";
import todo from "../models/todo";
import classes from "./Todos.module.css";
import TodoItem from "./TodoItem";
const Todoes: React.FC<{ items: todo[]; onRemoveTodo: (id: string)=> void }> = (props) => {
  return (
    <Fragment>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Todoes;
