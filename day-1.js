import fetch from "node-fetch";

fetch("https://adventofcode.com/2021/day/1/input")
  .then((response) => response.json())
  .then((data) => console.log(data));

export default function sonarSweep() {
  console.log("hello, world!");
}
