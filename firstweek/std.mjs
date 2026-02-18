process.stdin.on("data", (chunk) => {
  console.log(chunk);
  process.stdout.write(chunk);
});
