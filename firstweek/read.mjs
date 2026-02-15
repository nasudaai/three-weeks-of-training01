import { readFile } from 'node:fs';

const data = readFile("memo.md", (err, d) => {
  console.log(d);
  process.stdout.write(d);
});

console.log(data);
