function add(x, y) {
    let temp = x + y;
    return temp
}

sum = (x, y) => {
    let temp = x + y
    return temp
}
sub = (x, y) => {
    let temp = x - y
    return temp
}

console.log(`add(3,4) = ${add(3, 4)}`)
console.log(`sum(3,4) = ${sum(3, 4)}`)
console.log(`sub(3,4) = ${sub(3, 4)}`)

function method(money) {
    if (money > 5000) return rideTaxi();
    else if (money > 2000) return rideBus();
    else return walk();
}

function rideTaxi() {
    // console.log('택시타자');
    return '택시타자';
}

function rideBus() {
    // console.log('버스타자');
    return '버스타자';
}

function walk() {
    // console.log('걸어가자');
    return '걸어가자';
}
let money = 1000

console.log(`money : ${money} => ${method(money)}`)



for (let i = 500; i < 6000; i+=500) {
    let money = i;
    console.log(`money : ${money} => ${method(money)}`)
}
