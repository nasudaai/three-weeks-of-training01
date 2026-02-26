const args = process.argv.slice(2);
console.log(args);

const obj = {
  key: "value"
};

let {key} = obj;
console.log(key);


function reVal() {
  const value = obj.key;

  return value;
};

const value = reVal();



function write(str) {

  process.stdout.write(str);
}; 


write(value);
