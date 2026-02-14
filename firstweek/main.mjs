function re() {
  return function fn() {
    console.log("test");
  };
};

function exe(fn) {
  fn()
};

exe(re());
