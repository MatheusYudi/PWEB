let getBigger = (numbers) => numbers.sort((x, y) => x - y).pop();

let numbers = [];

while (numbers.length < 3) {
    const value = Number(prompt('Type a number:'));

    if (!isNaN(value)) {
        numbers.push(value);
    }
}

alert('The bigger is: ' + getBigger(numbers));