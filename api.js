import fetch from "node-fetch";

const API_URL = "https://adventofcode.com";

const getData = async (year, day) => {
  return fetch(`${API_URL}/${year}/day/${day}/input`, {
    method: "GET",
    headers: {
      cookie: `session=${process.env.AOC_SESSION_KEY}`,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(String(response.status));
      }
      console.log("Getting advent calendar data...");
      return response.text();
    })
    .catch((exception) => {
      console.log("Exception : ", exception);
    });
};

export { getData };
