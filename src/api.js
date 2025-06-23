import axios from "axios";

const API_URL = "https://jsearch.p.rapidapi.com/search";

const options = {
  headers: {
    "X-RapidAPI-Key": "536eea7f72msh832ebb0ec9f9f33p1af30ejsn46d87ba84838",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

export const fetchJobs = async (query, location) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query: `${query} in ${location}`,
        num_pages: 1,
      },
      ...options,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
