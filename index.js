const express = require('express')
//익스프레스 모듈은 가져온다.
const app = express()
//함수를 이용해서 express를 더 새로운 익스프레스를 만들고
const port = 3000
//mongodb+srv://jae-bok:<password>@reactmdb.omfs3.mongodb.net/<dbname>?retryWrites=true&w=majority


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jae-bok:intjdnf95@reactmdb.omfs3.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mongoDB Connected...'))
.catch(err =>console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요.')
})
//루트디렉톨에 오면 헬로월드 출력
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//포트 실행