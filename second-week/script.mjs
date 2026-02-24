const args = process.argv.slice(2);
console.log(args);

const obj = {
  key: "value"
};

let {key} = obj;
console.log(key);



function write() {

  process.stdout.write("str");
}; 


write();
