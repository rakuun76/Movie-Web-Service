import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To Dos ({toDos.length})</h1>
        <input
          text="text"
          placeholder="Write to do"
          value={toDo}
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {
          //react element(컴포넌트)를 원소로 가지는 배열
          toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default App;
