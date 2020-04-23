import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h3>
        I like {name}, {rating}/5.0
      </h3>
    </div>
  );
}

const foods = [
  {
    id: 1,
    name: "kimchi",
    rating: 4.0,
  },
  {
    id: 2,
    name: "goggi",
    rating: 4.8,
  },
  {
    id: 3,
    name: "된장찌개",
    rating: 5.0,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foods.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
