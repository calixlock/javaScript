// await
// ansync 함수 내에서만 사용 가능 // 일반함수 에러 발생
function getName(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name);
        },1500);
    });
}

async function showName(){
    const result = await getName('Tom');
    // return console.log(result);    
    console.log(result);
    console.timeEnd('timeWatch');

}

console.time('timeWatch');
showName();
