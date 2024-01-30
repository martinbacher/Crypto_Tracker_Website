import axios from "axios";

const fetchData = async (apiUrl) => {
  try {
    const res = await axios.get(apiUrl, {
      headers: {
        accept: "application/json",
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    });
    return res.data;
  } catch (err) {
    console.log("Error fetching data: ", err);
    throw err;
  }
};

export default fetchData;
