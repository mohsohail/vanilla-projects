function multiplyBy2(x, y) {
  return x * y;
}

let mul = multiplyBy2.bind(this, 2);
console.log(mul(6));

let multiply = (x, y) => {
  return (y) => {
    return x * y;
  };
};

let foo = multiply(2);
console.log(foo(3));
