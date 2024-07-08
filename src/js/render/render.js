import { apiCall } from "../api/api.js";
import { combinedUrl } from "../api/constant.js";
import { createCard } from "../createElements/card.js";
import { createComparisonContainer } from "../createElements/comparisonContainer.js";

const listContainer = document.querySelector(".list-container");

export const renderListings = (names) => {
  apiCall(combinedUrl).then((data) => {
    listContainer.innerHTML = "";
    if (Array.isArray(names)) {
      const cardDataArray = names.map((name) => ({
        name: name,
        ...data[name],
      }));
      const container = createComparisonContainer(cardDataArray);
      listContainer.append(container);
    } else {
      const cardData = {
        name: names,
        ...data[names],
      };
      const card = createCard(cardData);
      listContainer.append(card);
    }
  });
};
