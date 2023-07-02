// promise all
// 중간 실패시 데이터 누락 발생
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료')
        }, 1500);
    });
};
const f2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2번 주문 완료')
            // rej('2번 실패')
        }, 1500);
    });
};
const f3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 주문 완료')
        }, 1500);
    });
};
console.time('allTime');
// all : 다 완수해야 반환됨
Promise.all([f1(), f2(), f3()])
    .then((res) => {
        console.log(res); // 배열로 반환
        console.timeEnd('allTime');
    });


// race : 하나라도 완수하면 반환되고 끝
console.time('raceTime');
Promise.race([f1(), f2(), f3()])
    .then((res) => {
        console.log(res); // 배열로 반환
        console.timeEnd('raceTime');
    });