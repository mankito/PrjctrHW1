const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];
for (let i = 0; i < userNames.length; i++) {
 	let name = userNames[i].split(' ');
  	let initial = '';
  	for (let j = 0; j < name.length; j++) {
  		initial += name[j].substring(0, 1) + '.';
	}
  initials.push(initial);
}
initials.sort();
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
//Відчуваю, що це не найкращий спосіб, але через проблеми зі здоров'ям не встигаю зробити нічого ліпшого. 
//Сподіваюсь, цього достатньо для зарахування. Пізніше хотів би написати щось лаконічніше.

const currentMaxValue = 4589;
let reverseMaxValue = currentMaxValue.toString().split('').reverse().join('');
reverseMaxValue = Number(reverseMaxValue);
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((total, currentVal) => total * currentVal);
console.log(productOfArray); // 24