const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('main page : express 사용중')
})
app.get('/dog', function (req, res) {
    // res.send('<h1>/dog 입력</h1>')
    // res.send("<a href='http://naver.com'>/dog 입력/click 시 naver로 이동</a>")
    // res.send({"sound":"멍멍"})
    res.json({"sound":"멍멍"})
})
app.get('/cat', function (req, res) {
    res.send('/cat 입력')
})
// get방식으로 data 받을때 params / query 형태로
// :id >> 들어온 요청
app.get('/user/:id',(req,res)=>{
    const p = req.params; // :keyName > data req.params로 받을 수 있다.
    console.log(p) // localhost:3000/user/amj 입력시 { id: 'amj' } json 형식으로 들어온다 
    console.log(p.id) // id만 출력가능
    res.json({'userId' : p.id}) // 받은 id로 다시 출력
})
app.get('/query/:id',(req,res)=>{
    // http://localhost:3000/query/amj?q=ddd&age=30
    const q = req.query;
    console.log(q)  // { q: 'ddd', age: '30' } 출력
    console.log(q.q ) // ddd 출력
})
app.post('/query/:id',(req,res)=>{
    // http://localhost:3000/query/amj?q=ddd&age=30
    const p = req.params;
    console.log(p)
    const b = req.body;
    console.log(b)
    res.send(b)
})



// app.listen(3000)
app.listen(port, () => {
    console.log(`listening on port : ${port}`)
})