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

// handleSubmit function is executed when the form is submitted
function handleSubmit(event) {
  event.preventDefault();

  // loading image
  const loading = document.getElementById("loading");
  loading.style.display = "block";

  // The urls we use to post data
  const baseUrlNews = "http://localhost:8081/sentimentNews";
  const baseUrlText = "http://localhost:8081/sentimentText";

  // Input field we use to send data to the server
  let url = document.getElementById("url").value;

  // Holders for succses and error result
  const succsesHolderContainer = document.getElementById("sucsses-holder");
  const errorHolderContainer = document.getElementById("error-holder");
  const errorParagraph = document.querySelector("#error-holder p");

  // Elements who use to add response data
  const resultUrl = document.getElementById("search-url");
  const polarity = document.getElementById("polarity");
  const subjectivity = document.getElementById("subjectivity");

  // Clear content of field
  polarity.innerHTML = "";
  subjectivity.innerHTML = "";

  // Both holders is hidden
  succsesHolderContainer.style.display = "none";
  errorHolderContainer.style.display = "none";

  // check what text was put into the form field

  // Check URL is valid
  if (Client.validUrl(url)) {
    postData(baseUrlNews, { url })
      .then(function (res) {
        loading.style.display = "none";
        succsesHolderContainer.style.display = "block";
        resultUrl.innerHTML = url;
        if (res.polarity === "neutral") {
          polarity.style.color = "#8a9901";
        } else if (res.polarity === "positive") {
          polarity.style.color = "#03a00b";
        } else {
          polarity.style.color = "#c70505";
        }
        if (res.polarity === undefined) {
          succsesHolderContainer.style.display = "none";
          errorHolderContainer.style.display = "block";
          errorParagraph.innerHTML = `Requested URL was not found`;
        }
        polarity.innerHTML = res.polarity;
        subjectivity.innerHTML = res.subjectivity;
      })
      .catch((error) => {
        loading.style.display = "none";
        succsesHolderContainer.style.display = "none";
        errorHolderContainer.style.display = "block";
        errorParagraph.innerHTML = `The information entered does not match to the condition or server not work`;
      });
    // checks if url is invalid for length less than 250 characters
  } else if (url.length <= 250) {
    postData(baseUrlText, { text: url })
      .then(function (res) {
        loading.style.display = "none";
        succsesHolderContainer.style.display = "block";
        resultUrl.innerHTML = url;
        if (res.polarity === "neutral") {
          polarity.style.color = "#8a9901";
        } else if (res.polarity === "positive") {
          polarity.style.color = "#03a00b";
        } else {
          polarity.style.color = "#c70505";
        }
        if (res.polarity === undefined) {
          succsesHolderContainer.style.display = "none";
          errorHolderContainer.style.display = "block";
          errorParagraph.innerHTML = `Requested text is undefined`;
        }
        polarity.innerHTML = res.polarity;
        subjectivity.innerHTML = res.subjectivity;
      })
      .catch((error) => {
        loading.style.display = "none";
        succsesHolderContainer.style.display = "none";
        errorHolderContainer.style.display = "block";
        errorParagraph.innerHTML = `The information entered does not match to the condition or server not work`;
      });
    // The information entered does not meet any of the conditions or servers not work
  } else {
    getData("/")
      .then(function (res) {
        console.log(res);
      })
      .catch((error) => {
        succsesHolderContainer.style.display = "none";
        errorHolderContainer.style.display = "block";
        errorParagraph.innerHTML = `The information entered does not meet any of the conditions or server not work`;
      });
  }

  // reset input field
  document.querySelector("#form-section form").reset();
  resultUrl.innerHTML = "";
}

export { handleSubmit };
