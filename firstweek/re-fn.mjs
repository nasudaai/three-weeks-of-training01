function re(a) {
  return function fn() {
    console.log(a);
  };
};

function exe(fn) {
  fn();
};

exe(re(42));
