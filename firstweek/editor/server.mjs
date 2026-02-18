import { createServer } from 'node:http';

console.log(createServer);

const server = createServer((req, res) => {
  res.end("html");
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000")
});
