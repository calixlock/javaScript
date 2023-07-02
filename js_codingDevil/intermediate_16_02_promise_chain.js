const f1 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('1번 주문 완료')
        },1500);
    });
};
const f2 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // res('2번 주문 완료')
            rej('2번 실패')
        },1500);
    });
};
const f3 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('3번 주문 완료')
        },1500);
    });
};
console.log('test2 promise chain 시작')
f1()
.then((res) => f2(res))
.then((res) => f3(res))
.then((res) => console.log(res))
.catch(console.log)
.finally(()=>{
    console.log('test2 끝')
});