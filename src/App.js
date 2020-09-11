import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement(
  //   "div",
  //   {
  //     //components go here, like id:"this-div"
  //     id: "pet_list",
  //   },
  //   [
  //     React.createElement("h1", {}, "Adopt Us!"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "Havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Eagle",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Doink",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //   ]
  // );
  return (
    <div id="pet-list" >
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Eagle" />
      <Pet name="Doinke" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
