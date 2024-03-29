import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlice"; // Assuming toggleTodo action creator exists

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id)); // Dispatch action to toggle todo completion
  };

  return (
    <>
      <div>
        <div className="p-4 flex justify-center items-center ">
          <ul className="divide-y divide-gray-200 min-w-80 bg-blue-300 ml-60 mr-60 rounded-md my-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between rounded-md py-2  ${
                  todo.completed ? "bg-green-300" : ""
                }`}
              >
                {/* Checkbox for toggling completion */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  className="mx-2"
                />
                {/* Checkbox for toggling completion */}
                <span className="text-gray-800 mx-2">{todo.text}</span>
                <button
                  className="text-white bg-red-500 hover:bg-red-600 py-1 px-3 mx-3 rounded"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todos;
