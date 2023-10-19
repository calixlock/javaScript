// 유일한 식별자 생성시
const id = Symbol('id');
const id2 = Symbol('id');
console.log('id === id2 : ',id === id2);
console.log('id == id2 : ',id == id2);
const u1 = {
    name : 'mike',
    age : 30,
    [id] : 'myid',
}
console.log(u1)
console.log('u1 entries :\n',Object.entries(u1)) // object method : symbol의 key/value는 숨김. 들어나지 않는다

// 동일 symbol 필요한 경우 symbol.for();
const sb1 = Symbol.for('id');
const sb2 = Symbol.for('id');
console.log(sb1===sb2);

