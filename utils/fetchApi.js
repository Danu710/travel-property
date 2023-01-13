import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "080a93f24dmsheabf7c49ae0eda5p1a6cacjsn0be84e6f7c17",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
