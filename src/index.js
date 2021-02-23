import React from "react";
import ReactDOM from "react-dom";

// const jsx = (
//   <div>
//     <h1>Hola, soy Angel</h1>
//     <p>Soy ingeniero frontend.</p>
//   </div>
// );

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Angel"),
  React.createElement("p", {}, "Soy ingeniero de la web.")
);

const container = document.getElementById("app");

// ReactDOM.render(jsx, container);
ReactDOM.render(element, container);
