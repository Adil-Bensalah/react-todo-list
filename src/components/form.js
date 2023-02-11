import { useState } from "react";
import "./form.css";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: "react", id: uuidv4() },
    { txt: "sport", id: uuidv4() },
    { txt: "jeux video", id: uuidv4() },
  ]);

  const [inputData, setInputeData] = useState();
  const handelSubmit = (e) => {
    e.preventDefault();

    const newArr = [...dataArr];

    const todo = {};
    todo.txt = inputData;
    todo.id = uuidv4();
    newArr.push(todo);
    setDataArr(newArr);
    setInputeData("");
  };

  const handelInput = (e) => {
    setInputeData(e);
  };

  const handelDelete = (id) => {
    const filter = dataArr.filter((el) => el.id !== id);
    setDataArr(filter);
  };

  return (
    <div id="cont">
      <h1>
        <span>To-do</span> liste
      </h1>
      <form onSubmit={(e) => handelSubmit(e)}>
        <label htmlFor="todo">Chose à faire </label> <br />
        <input
          type="text"
          id="todo"
          autoComplete="off"
          value={inputData}
          onInput={(e) => handelInput(e.target.value)}
        />
        <br />
        <button>Envoyez</button>
      </form>
      <h2>liste de choses a faire :</h2>
      <ul classename="list-group">
        {dataArr.map((element) => {
          return (
            <Item
              txt={element.txt}
              key={element.id}
              id={element.id}
              delFunc={handelDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
