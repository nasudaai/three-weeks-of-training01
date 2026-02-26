//composition
const chordProgression = ["Bm", "A"];

const majorDegNum = ["6", "5"];
const minor = [1, 7];

let deg1 = majorDegNum[0];
let deg2 = majorDegNum[1];

let degree = {
  [deg1]: chordProgression[0],
  [deg2]: chordProgression[1]
};

console.log(deg1 + ": " + degree[deg1], deg2 + ":" +  degree[deg2]);
