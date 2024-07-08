import { renderListings } from "../render/render.js";

export const formHandler = (event) => {
  event.preventDefault();
  const city1Value = event.target.elements.city1.value;
  const city2Value = event.target.elements.city2.value;
  renderListings([city1Value, city2Value]);
};
