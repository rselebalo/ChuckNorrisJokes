import axios from "axios";

export default async category => {
  try {
    const result = await axios.request({
      url: `https://api.chucknorris.io/jokes/random?category=${category}`,
      method: "GET"
    });
   
    // return {
    //   id: result.data.id,
    //   value: result.data.value,
    //   url: result.data.url,
    //   created_at: result.data.json().created_at,
    //   icon_url: result.data.json().icon_url,
    //   categories: result.data.json().categories,
    // };
    return result.data;
  } catch (e) {
    return {
      id: "error",
      value: e.message,
      url: "error"
    };
  }
};
