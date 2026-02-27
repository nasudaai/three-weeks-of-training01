import {write} from './out.mjs';

function main() {

  const args = process.argv.slice(2);
  write(JSON.stringify(args));
  write("string\n");
};

main();
