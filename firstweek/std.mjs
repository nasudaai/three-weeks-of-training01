import { writeFileSync } from 'node:fs'
console.log(writeFileSync);

process.stdin.on("data", (chunk) => {
  console.log(chunk);
  process.stdout.write(chunk);

  writeFileSync("./log.md", chunk);
});
