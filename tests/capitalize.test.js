import capitalize from '../src/capitalize.js';   

if (assert.notDeepEqual(capitalize('hello'), 'Hello')) {  
  throw new Error('Функция работает неверно!');
}

if (assert.notDeepEqual(capitalize(''), '')) {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!'); 