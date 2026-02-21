function now() {

  const now = Date();
  console.log(now);
};

function write(str) {
  process.stdout.write(str + "\n");
};

function main() {
  now();
  process.stdout.write("test");
  write("string");
};


main();
