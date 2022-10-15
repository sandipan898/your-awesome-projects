import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../redux/actions/todoActions";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

const initialTodo = {
  description: "",
};

const MainContainer = () => {
  const [todo, setTodo] = useState(initialTodo);
  const [todoId, setTodoId] = useState(null);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getAllTodos());
  }, [dispatch]);

  const fetchedTodo = useSelector((state) => state.todo);

  const handleSubmit = (event) => {
    event.preventDefault();
    // create todo call
    if(todoId) {
      dispatch(updateTodo(todoId, todo));
    } else {
      dispatch(createTodo(todo));
    }
    setTodo(initialTodo);
  };

  const handleEdit = (id) => {
    setTodoId(id);
    setTodo(fetchedTodo.find(todo => todo.todo_id === id));
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <div style={{ margin: "2rem" }}>
      <Grid container spacing={4}>
        <Grid item sm={7} xs={12}>
          <TodoTable rows={fetchedTodo} handleDelete={handleDelete} handleEdit={handleEdit} />
        </Grid>
        <Grid item sm={5} xs={12}>
          <TodoForm
            handleSubmit={handleSubmit}
            todoId={todoId}
            todo={todo}
            setTodo={setTodo}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContainer;
