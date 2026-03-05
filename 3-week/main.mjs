const args = process.argv.slice(2);
console.log(args);

const modes = ["d", "al"];

process.stdout.write(JSON.stringify(args) + "\n");


let mode = "";

if (args[0] !== modes[0]) {
  console.log("mode is dafult!!");
}
