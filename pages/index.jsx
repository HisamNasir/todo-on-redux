import { useState } from "react";
import TodoItem from "@/src/store/components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "@/src/store/features/todoSlice";

function App() {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="App flex justify-center py-10 h-full">
      <div className=" text-center border p-4 border-black rounded-xl">
      <h1 className="font-semibold text-3xl text-gray-700 m-2">TODO List</h1>
      <form className="App-form flex  w-80" onSubmit={handleAddTodo}>
        <input className=" focus:outline-none w-full px-2 border border-black rounded-l-xl" type="text" onInput={(e) => setInput(e.target.value)} />
        <button className=" hover:bg-slate-200 px-10 rounded-r-xl border  border-black" type="submit">+</button>
      </form>
      <div className="Todos w-full border border-black rounded-xl mt-2 divide-y">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            />
          ))}
        {count === 0 && <p>No todos</p>}
      </div> 
      </div>

    </div>
   
  );
}

export default App;
