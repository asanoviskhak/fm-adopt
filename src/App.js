import React from 'react';
import { render } from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  return React.createElement(
    "div",
    {
      //components go here, like id:"this-div"
      id: "pet_list",
    },
    [
      React.createElement("h1", {}, "Adopt Us!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Eagle",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
