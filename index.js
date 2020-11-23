const express = require('express')
//익스프레스 모듈은 가져온다.
const app = express()
//함수를 이용해서 express를 더 새로운 익스프레스를 만들고
const port = 3000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require('./config/key');
//어플리케이션/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({extended: true}));

//어플리케이션 제이슨 타입 분선해서 가졍고기
app.use(bodyParser.json());

const mongoose = require('mongoose')
//몽고디비 비번 아이디가 들어있기 때문에 보호해야함...
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mongoDB Connected...'))
.catch(err =>console.log(err))




app.get('/', (req, res) => {
  res.send('!~안녕하세요.')
})

app.post('/register', (req,res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터에 넣어준다.

  console.log("req.body : ", req.body);

    const user = new User(req.body)

    console.log('====================================');
    console.log("user : ", user);
    console.log('====================================');


  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: ture
    });
  });

});

//루트디렉톨에 오면 헬로월드 출력
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//포트 실행