import axios from "axios";

export default async () => {
  try {
    const result = await axios.request({
      url: "https://api.chucknorris.io/jokes/categories",
      method: "GET"
    });

    const categories = [];
    result.data.map(c => categories.push(c));
    
    return categories;
  } catch(error) {
    return [error.message];
  }
};
