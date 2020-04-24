function printSomething(...arg) {
  console.log(arg[0], arg[1], arg[4]);
  console.log(this.name + ' ' + this.age);
}

let obj = {
  name: 'sohail',
  age: 26,
};

Function.prototype.bind2 = function (...args) {
  let params = args.slice(1);
  return (...params2) => {
    this.apply(args[0], [...params, ...params2]);
  };
};

let foo = printSomething.bind2(obj, 'hello', 'world', 'shinra', 'tensei');
foo('hello wall-e');
