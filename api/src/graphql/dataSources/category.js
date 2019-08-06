import axios from "axios";

export default async () => {
  try {
    const result = await axios.request({
      url: "https://api.chucknorris.io/jokes/categories",
      method: "GET"
    });

    return result.data.json();
  } catch {
    return {
      value: "error"
    };
  }
};
