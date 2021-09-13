import React from "react";
import { Reducer } from "@reduxjs/toolkit";

export type State = {
  strings: Array<string>;
};
type Action = {
  type: "add" | "remove" | "clear";
  payload?: any;
};

export const reducerFn: Reducer<State | undefined, Action> = (
  state,
  action
): State | undefined => {
  if (!state)
    return {
      strings: ["11222", "ddddd"],
    };

  switch (action.type) {
    case "add":
      return { strings: [...state.strings, action.payload] };
    case "remove":
      // Get the index (the string we want to remove)
      const index = action.payload;
      // Make a copy of the old state
      const copyOfState = [...state.strings];
      // Remove the element in position index and return the new state
      copyOfState.splice(index, 1);
      return { strings: copyOfState };
  }
  return state;
};
