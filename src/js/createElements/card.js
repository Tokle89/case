import { createElement } from "../utils/createElement.js";

export const createCard = (data, comparisonData) => {
  const element = createElement("div", ["card"]);
  const title = createElement("h3", undefined, undefined, data.name);
  const properties = [];
  console.log(data);

  Object.keys(data).forEach((key) => {
    if (key !== "name") {
      const propertyElement = createElement("p", undefined, undefined, `${key}: ${data[key]}`);
      if (comparisonData && comparisonData[key] === data.name) {
        propertyElement.classList.add("highlight");
      }
      properties.push(propertyElement);
    }
  });
  element.append(title, ...properties);
  return element;
};
