const pr = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        // resolve('ok'); //pr의 result로

        reject(new Error('error 발생')); // pr의 err로
    },2000);
})

console.log('test 시작');
pr.then(
    function(result){
        console.log(result);
    }).catch(
        function(err){
            console.log(err);
        }
    ).finally(
        function(){
            console.log('test 완료');
        }
    )


