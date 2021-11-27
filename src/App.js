import TodoList from "./components/TodoList";

function App() {
  const todoList = [
    {content: 'Bathe the dog', completed: true, id: 1},
    {content: 'Cook dinner', completed: false, id: 2}
  ];

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
