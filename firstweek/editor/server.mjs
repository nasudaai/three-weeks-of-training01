import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

console.log(readFileSync);
console.log(createServer);

const html = readFileSync("./index.html");
console.log(html);


const server = createServer((req, res) => {
  res.end(html);
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000")
});
