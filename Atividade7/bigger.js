let getBigger = (numbers) => numbers.sort((x, y) => x - y).pop();

// 1;2;3; -> ['1', '2', '3'] -> [1, 2, 3]
const values = prompt('Digite 3 números separados por ;').split(';').map(item => Number(item));

alert('The bigger is: ' + getBigger(values));