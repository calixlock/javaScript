const f1 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료')
        }, 1500);
    });
};
const f2 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res('2번 주문 완료')
            rej('2번 실패') // try-catch로 오류 잡기
        }, 1500);
    });
};
const f3 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 주문 완료')
        }, 1500);
    });
};

async function order(){
    try{
        const result01 = await f1('시작');
        const result02 = await f2(result01);
        const result03 = await f3(result02);
        console.log(result03);
    }catch(e){
        console.log(e);
    }finally{
        console.timeEnd('timeWatch');
    }
}

console.time('timeWatch');
order();

