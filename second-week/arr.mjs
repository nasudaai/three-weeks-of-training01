const args = process.argv.slice(2);

if (args.length >= 1) {
  console.log(args);
  process.exit();
}

const arr = [1, 2, 3, 4, 5];


for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
