import { getData } from "./api.js";

export default async function sonarSweep() {
  const data = await getData(2021, 1);
  console.log("data:", data.trim().split("\n").map(Number));
}
