const getData = async (baseUrl) => {
  const response = await fetch(baseUrl);
  try {
    return response.json();
  } catch (error) {
    return error;
  }
};

// postData function using the keyword async and use method POST to post data
const postData = async (baseUrl = "", data = {}) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    return error;
  }
};

export { getData, postData };
