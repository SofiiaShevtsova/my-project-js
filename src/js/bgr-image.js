const axios = require("axios").default;

export const bgrImage = {
  options:
    "key=31187211-d453cf6c0705ee9af6400cbd4&min_width=1200&q=black&image_type=photo&orientation=horizontal&safesearch=true&per_page=3&",
  baseUrl: "https://pixabay.com/api/",

  async getImage() {
    const page = Math.floor(Math.random() * 20);
    const body = document.querySelector("body");

    try {
      const response = await axios.get(
        `${this.baseUrl}?${this.options}` + `page=${page}`
      );
      // console.log(response.data.hits[1].largeImageURL);
      body.style.backgroundImage = `url(${response.data.hits[1].largeImageURL})`;
      body.style.backgroundPosition = `center`;
      body.style.backgroundSize = `cover`;
      body.style.backgroundRepeat = `no-repeat`;
    } catch (error) {}
  },
};
