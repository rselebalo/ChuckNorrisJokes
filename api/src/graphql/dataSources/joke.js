import axios from "axios";

export default async category => {
  try {
    const result = await axios.request({
      url: `https://api.chucknorris.io/jokes/random?category=${category}`,
      method: "GET"
    });
    return result.data.json();
  } catch (e) {
    console.log(e);
    return {
      id: "error",
      value: "error",
      url: "error"
    };
  }
};
