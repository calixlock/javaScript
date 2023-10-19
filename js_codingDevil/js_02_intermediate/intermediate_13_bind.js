const u1 = {
    name : 'mike',
}
const u2 = {
    name : 'kim',
    age : 30,
}
const u3 = {
    name : 'tom',
    age : 40,
}
function update(birthYear,occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}
const updateMike = update.bind(u1);
updateMike('1991','teacher')
console.log(u1);

const user = {
    name: 'jane',
    showName: function (){
        console.log(`hello, ${this.name}`)
    },
}
user.showName();
let fn = user.showName;
console.log(fn)
fn(); // this.name > undefined;
fn.call(user); // this
fn.apply(user); // this
let bindFn = user.showName.bind(user);
bindFn();