import { getData } from "../api.js";

export default async function dive() {
  const data = await getData(2021, 2);
  const directions = data
    .trim()
    .split("\n")
    .map((y) => y.split(" "));

  let x, y;
  [x, y] = [0, 0];
  directions.forEach((dir) => {
    let movement = Number(dir[1]);
    switch (dir[0]) {
      case "forward":
        x += movement;
        return;
      case "up":
        y -= movement;
        return;
      case "down":
        y += movement;
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
  directions.forEach((dir) => {
    let movement = Number(dir[1]);
    switch (dir[0]) {
      case "forward":
        x += movement;
        y += aim * movement;
        return;
      case "up":
        aim -= movement;
        return;
      case "down":
        aim += movement;
        return;
    }
  });

  console.log("Day 2, Part 2:");
  console.log("x: ", x);
  console.log("y: ", y);
  console.log("aim: ", aim);
  console.log("x * y: ", x * y);
}
