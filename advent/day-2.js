import { getData } from "../api.js";

export default async function dive() {
  const data = await getData(2021, 2);
  const directions = data
    .trim()
    .split("\n")
    .map((y) => {
      let [a, b] = y.split(" ");
      return [a, Number(b)];
    });

  let x, y;
  [x, y] = [0, 0];
  directions.forEach(([direction, inc]) => {
    switch (direction) {
      case "forward":
        x += inc;
        return;
      case "up":
        y -= inc;
        return;
      case "down":
        y += inc;
        return;
    }
  });

  console.log("Day 2, Part 1:");
  console.log("x: ", x);
  console.log("y: ", y);
  console.log("x * y: ", x * y);

  // Part 2
  let aim;
  [x, y, aim] = [0, 0, 0];
  directions.forEach(([direction, inc]) => {
    switch (direction) {
      case "forward":
        x += inc;
        y += aim * inc;
        return;
      case "up":
        aim -= inc;
        return;
      case "down":
        aim += inc;
        return;
    }
  });

  console.log("Day 2, Part 2:");
  console.log("x: ", x);
  console.log("y: ", y);
  console.log("aim: ", aim);
  console.log("x * y: ", x * y);
}
