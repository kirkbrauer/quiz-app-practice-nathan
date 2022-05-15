import { useState } from "react";
import { render } from "react-dom";
import { correctArray } from "./App";

export default function Choice(props) {
  return (
    <div>
      <button onClick={() => props.setBool(correctArray())}>click</button>
      <label>
        {" "}
        {props.bool
          ? props.value1 + props.value2
          : parseInt(Math.random() * 15 + 15)}
      </label>
    </div>
  );
}
