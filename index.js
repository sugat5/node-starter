const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const jsonParser = bodyParser.json();

const users = [];

app.get("/api/users", (req, res) => {
  res.send(users).sendStatus(200)
});

app.delete('/api/users/:userID', jsonParser,(req, res) => {
  const userID = Number(req.params.userID);
  const userToBeRemoved = users.findIndex((user) => user.id === userID);
  console.log(userToBeRemoved);
  if(userToBeRemoved === -1){
    return res.sendStatus(400)}
    users.splice(userToBeRemoved,1)
    })


 app.post("/api/users",jsonParser, (req, res) => {
  users.push({...req.body,id: Math.floor(Math.random()*10000)});
  res.sendStatus(200)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
