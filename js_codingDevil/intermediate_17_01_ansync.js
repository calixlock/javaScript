//ansync

async function getName() {
    // return Promise.resolve('Tom');
    throw new Error('error발생');
}
getName().then((name) => {
    console.log(name);
}).catch(
    // console.log
    (err) => { console.log(err) }
).finally(() => {
    console.log('실행 완료');
});