import React from "react";
import "./App.css";
import { State } from "./ReducerFn";
import { DefaultRootState, useSelector } from "react-redux";
import { store } from "./store";

function App() {
  const state: DefaultRootState = useSelector((state) => state);
  const myState = state as State;

  function addString() {
    store.dispatch({
      type: "add",
      payload: "NazmulMaretIdris".substring(Math.floor(Math.random() * 15)),
    });
  }

  function removeListItem(index: number) {
    store.dispatch({
      type: "remove",
      payload: index,
    });
  }

  return (
    <>
      <button onClick={addString}>Add</button>
      <ol>
        {myState.strings.map((string, index) => (
          <li onClick={() => removeListItem(index)}>{string}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
