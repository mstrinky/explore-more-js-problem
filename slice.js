const numbers = [45,654,34,44,54,34,54,565];
const partial = numbers.slice(1,6);
console.log(partial);
const portion = numbers.splice(2,5,55,66,44,77,99);
console.log(portion);
console.log(numbers);
