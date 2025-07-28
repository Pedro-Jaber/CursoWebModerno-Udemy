const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

console.log(obj);
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{a:1,b:2,c:3}")); // Error
// console.log(JSON.parse("{'a':1,'b':2,'c':3}")); // Error
console.log(JSON.parse('{"a":1,"b":2,"c":3}')); // Valido

console.log(JSON.parse('{"a":1.2,"b":"string","c":true,"d":{},"e":[]}'));
