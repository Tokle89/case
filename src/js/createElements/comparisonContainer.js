import { createElement } from "../utils/createElement.js";
import { compareProperties } from "../utils/compareProperties.js";
import { createCard } from "./card.js";

export const createComparisonContainer = (data) => {
  const container = createElement("div", ["dual-city-container"]);
  const comparisonData = compareProperties(data[0], data[1]);
  const city1 = createCard(data[0], comparisonData);
  const city2 = createCard(data[1], comparisonData);
  container.append(city1, city2);
  return container;
};
