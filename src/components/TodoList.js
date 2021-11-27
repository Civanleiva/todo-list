const TodoList = ({todoList}) => {
  return todoList.map((todo) => {
    return <h3 className={todo.completed ? "completed" : ""}>
        {todo.content}
      </h3>
  })
}


export default TodoList;
