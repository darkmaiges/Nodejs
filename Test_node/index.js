const express = require('express');
const app = express();

const hostName = '127.0.0.1';
const port = 3000;

app.listen(port, hostName, () => {
  console.log('Server Is Started Now.');
});

app.get('/', (req, res) => {
  res.send('hellow world! \n');
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if(!id){
    return res.status(400).json({error: 'Incorrect id'});
  }
  else{
    let user = users.filter( user => { return user.id == id})[0];

    if(!user)
    {
      return res.status(404).json({error: 'Unknown User'});
    }
    else
    {
      res.send(user.name);
    }
  }
});

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

