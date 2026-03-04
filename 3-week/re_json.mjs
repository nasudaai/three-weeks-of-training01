const args = process.argv.slice(2);
console.log(args);

function reJson() {
  const obj = {
    key: "value",
  };
  return JSON.stringify(obj);
}

const json = reJson();


process.stdout.write(json);
