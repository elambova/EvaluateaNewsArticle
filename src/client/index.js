// import js files
import { validUrl } from "./js/validUrl";
import { handleSubmit } from "./js/formHandler";

// import css/scss files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/header.scss";
import "./styles/form.scss";
import "./styles/result.scss";
import "./styles/footer.scss";
import "./styles/media.scss";

// import image/gif file
import loading from "./images/loading.gif";

// get image from html and set source
const loadingGif = document.getElementById("loading");
loadingGif.src = loading;

// export js files
export { validUrl, handleSubmit };
