import React from "react";
import "./App.css";
import { reducerFn, ReducerFnType, ReducerHookType, State } from "./ReducerFn";

const initialState: State = {
  strings: [],
};

function App() {
  const [myState, myDispatcher]: ReducerHookType =
    React.useReducer<ReducerFnType>(reducerFn, initialState);

  function addString() {
    myDispatcher({
      type: "add",
      payload: "blabablaabla".substring(Math.floor(Math.random() * 11)),
    });
  }

  function removeListItem(index: number) {
    myDispatcher({
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
