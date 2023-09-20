
import { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const updateInput = (_input: string) => {
    setInputValue(_input);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = [...todoList, inputValue];

    setTodoList(newTodo);
    setInputValue("");
  };

  const deleteItem = (index: number) => {
    const newTodo = [...todoList]
    newTodo.splice(index,1);
   setTodoList(newTodo);
    
  }
 

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">What to do</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={inputValue}
          onChange={(e) => updateInput(e.target.value)}
        />
        <input type="submit" value="Add to List" />
      </form>

      <div>
        <h3>List</h3>
        <ol>
          {todoList.map((todo ,index) => {
            return (
              <li key={index}>
                {todo}
                &emsp;
                <button onClick={() => deleteItem(index)}>X</button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default App;

