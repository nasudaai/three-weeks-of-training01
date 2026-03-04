const args = process.argv.slice(2);
console.log(args);

const val = args[0];
console.log(val);

function reJson(val) {
  const obj = {
    key: "value",
  };

  obj.key = val;

  return JSON.stringify(obj);
}

const json = reJson(val);


process.stdout.write(json);
