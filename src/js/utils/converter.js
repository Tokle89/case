export const convertToNumber = (value) => {
  if (typeof value === "string") {
    const cleanedValue = value.replace(/%/g, "").replace(/,/g, ".").replace(/\s/g, "");
    return Number(cleanedValue);
  }
  return Number(value);
};
