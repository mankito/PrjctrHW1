const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map(name => name.split(' ').map(word => word[0]).join('.') + '.').sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


//Task2

// const currentMaxValue = 4589;
// let reverseMaxValue = currentMaxValue.toString().split('').reverse().join('');
// reverseMaxValue = Number(reverseMaxValue);
// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'


//Task3

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray = resultsArray.flat(Infinity).reduce((total, currentVal) => total * currentVal);
// console.log(productOfArray); // 24