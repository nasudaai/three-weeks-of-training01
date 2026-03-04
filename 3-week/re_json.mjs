function reJson() {
  const obj = {
    key: "value",
  };
  return JSON.stringify(obj);
}

const json = reJson();


process.stdout.write(json);
