console.log(1);
test();

console.log(3);

function test() {
    setTimeout(() => console.log(2), 10);
}