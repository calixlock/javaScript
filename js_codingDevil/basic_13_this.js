let boy = {
    name:"mike",
    showName :function (){
        console.log(`hello, ${this.name}`)
    },
}
console.log(boy);
boy.showName();
let kim = boy;
boy = null;
kim.showName();

let boy2 = {
    name:this.name,
    showName(){
        console.log(`hello, ${this.name}`)
    },
}
let girl = boy2;
girl.name = `girl`;
console.log(girl)
girl.showName();
