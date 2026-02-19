const args = process.argv.slice(2);
console.log(args);


function write() {
  process.stdout.write("test!");
};

function main() {
  write();
};

main()
