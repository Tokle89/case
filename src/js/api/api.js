export const apiCall = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error fetching data");
    }
  } catch (error) {
    console.error(error);
    alert("Error fetching data");
  }
};
