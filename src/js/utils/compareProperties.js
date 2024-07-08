import { convertToNumber } from "./converter.js";

export const compareProperties = (data1, data2) => {
  const comparisonData = {};

  Object.keys(data1).forEach((key) => {
    if (key !== "name" && data2.hasOwnProperty(key)) {
      const value1 = convertToNumber(data1[key]);
      const value2 = convertToNumber(data2[key]);

      if (!isNaN(value1) && !isNaN(value2)) {
        comparisonData[key] = value1 > value2 ? data1.name : data2.name;
      }
    }
  });

  return comparisonData;
};
