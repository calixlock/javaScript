function sol() {
    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) continue;
        for (let j = 0; j < 5; j++) {
            if (j % 2 === 0) continue;
            for (let k = 0; k < 5; k++) {
                if (k % 2 === 0) continue;
                console.log(i, j, k);
            }
        }
    }
}

function gugudan1(num) {
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) continue;
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

function gugudan2(num) {
    for (let i = 1; i < 10; i += 2) {
        // if(i%2 === 0) continue;
        console.log(`${num} x ${i} = ${num * i}`)
    }
}
function gugudan_even(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) continue;
        gugudan1(i);

    }
}
// gugudan_even(5)

function star(num) {
    for (let i = 1; i < 6; i++) {
        console.log('*'.repeat(i));
    }
    // for (let i = 0; i < 5; i++) {
    //     console.log('*'.repeat(5 - i));
    // }
}
star(5);

function star1(num) {
    for (let i = 0; i<=num; i++){
        console.log(' '.repeat(i)+'*'.repeat(num-i))
    }
}
star1(5);

function cake(num) {
    for (let i = 0; i<=num; i++){
        console.log(' '.repeat(i)+'*'.repeat(num-i)+' '.repeat(i))
    }
}
cake(1);