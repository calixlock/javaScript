const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors()) //default : 모두허용

app.get('/', function (req, res) {
    res.send('animal_sound의 main page 입니다')
})
//변수는 animalName
app.get('/sound/:animalName',(req,res) => {
    const p = req.params 
    // console.log(`p : ${p}` )
    console.log(p)
    // req.params > animalName = 주소에 쓴 dog / cat
    const {animalName} = req.params 
    //value값이 바로 animalName에 적용됨 animalName = dog
    // console.log(animalName)
    if (animalName =="dog") res.json({'sound':'멍멍'})
    else if (animalName =="cat") res.json({'sound':'야옹'})
    else res.json('개나 고양이 아닙니다')
})

app.listen(port, () => {
    console.log(`listening on port : ${port}`)
})