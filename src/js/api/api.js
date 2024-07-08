export const apiCall = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
  }
};
