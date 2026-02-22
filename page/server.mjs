import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
console.log(createServer);
console.log(readFileSync);

const html = readFileSync("./index.html");
const css = readFileSync("./styles.css");
const js = readFileSync("./main.js");

const server = createServer((req, res) => {
  if (req.url === "/styles.css") {
    res.end(css);

    return;
  }

  if (req.url === "/main.js") {
    res.end(js);

    return;
  }
  res.end(html);
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000");
});
