const express = require('express');   //express 패키지를 가져온다.
const app = new express();            //express 인스턴스 생성

const hostName = '127.0.0.1';         //IP 선언
const port = 3000;                    //Port 선언

app.listen(port, hostName, () => {          //Server가 시작되면 이부분을 실행한다.
  console.log('Server Is Started Now.');    //Server가 시작되면 이 메세지를 출력
});

app.get('/', (req, res) => {                //Server의 URL부분에 아무내용이 없으면 이부분을 실행한다.
  res.send('hellow world! \n');             //따라서, 서버에 접속하면  Hellow World 메세지가 출력된다.
});

app.get('/users/:id', (req, res) => {       //Server의 URL부분에 users와 ID번호를 붙이면 이부분을 실행한다.
  const id = parseInt(req.params.id, 10);   //입력받은 ID를 Integer 형식으로 변경하고

  if(!id){                                                          //ID가 올바르지 않으면
    return res.status(400).json({error: 'Incorrect id'});           //Error 출력
  }
  else{                                                               //맞으면
    let rtnUser = users.filter( user => { return user.id == id})[0];  //user라는 변수에 users의 배열값 중 하나의 덩어리를 반환한다.
                                                                      //filter은 callback 함수 배열에대해 모든 조건을 검색한다. 
                                                                      //반환값은 배열(조건에 맞는것을 다 가져오기때문에)
    if(!rtnUser)    //반환값이 없으면
    {
      return res.status(404).json({error: 'Unknown User'});
    }
    else            //있으면
    {
      res.send(rtnUser.name);   //해당 이름을 Send로 출력 (요청자에게 전송)
    }
  }
});

// 유저 정보를 담은 배열 선언
let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  },
  {
    id: 4,
    name: 'Tarzan'
  }
]

