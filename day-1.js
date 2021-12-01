import { getData } from "./api.js";

export default async function sonarSweep() {
  const data = await getData(2021, 1);
  const sonarDepths = data.trim().split("\n").map(Number);

  let increases = 0;
  sonarDepths.reduce((prev, curr) => {
    if (prev < curr) {
      increases++;
    }
    return curr;
  }, sonarDepths[0]);

  console.log("Day 1, Part 1: ", increases);

  const sum = (prev, curr) => prev + curr;

  increases = 0;
  for (let i = 0; i < sonarDepths.length - 3; i++) {
    let A = sonarDepths.slice(i, i + 3).reduce(sum);
    let B = sonarDepths.slice(i + 1, i + 4).reduce(sum);
    if (A < B) {
      increases++;
    }
  }
  console.log("Day 1, Part 2: ", increases);
}
