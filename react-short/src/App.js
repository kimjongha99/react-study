import './App.css';
import {useState} from "react";

function App() {
  const  [todo , setTodo ]= useState([


  ]);
  const  [newTodo, setNewTodo] = useState('');

    const  onChangeNewTodo = (e) =>{
    setNewTodo(e.target.value);
}

    const onSubmit = (e) => {
        e.preventDefault();
        setTodo(prevTodos => [
            ...prevTodos,
            { title: newTodo, completed: false, id: Math.random() }
        ]);
        setNewTodo(newTodo); // Clearing the input field after submitting
    }

    return (
        <div className="App">
            <h1>Todo List</h1>
            <ul className="todo-list">
                {todo.length === 0 && (
                    <div>
                        <div>할일이 없습니다</div>
                    </div>
                )}


                {todo.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}


            </ul>
            <form onSubmit={onSubmit}>
                <div>할일을 추가하세요</div>
                <input type="text" value={newTodo} onChange={onChangeNewTodo} />
                <button type="submit">추가</button>
            </form>
        </div>
    );
}
export default App;
