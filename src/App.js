import TodoList from "./components/TodoList";

function App() {
  const todoList = [
    {content: 'Bathe the dog', completed: true, id: 1},
    {content: 'Cook dinner', completed: false, id: 2},
    {content: 'Show how to use git', completed: false, id: 3}
  ];

  // Change

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
