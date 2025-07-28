// This == global
let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global); // true

const obj = {};
comparaComThis = comparaComThis.bind(obj); // this = obj
comparaComThis(global); // false
comparaComThis(obj); // true

// This == module.exports
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global); // false
comparaComThisArrow(module.exports); // true

// This n muda apesar do bind | arrow function não altera o this
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // false
comparaComThisArrow(module.exports); // true
