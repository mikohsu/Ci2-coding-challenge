//Heroku server
const app = require('express')();

const http = require('http').Server(app);

const PORT = process.env.PORT || 80;


app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/coding-test.html');
})

app.get('/style.css', (req, res)=>{
  res.sendFile(__dirname + '/style.css');
})

app.get('/*', (req, res)=>{
  res.sendFile(__dirname + req.path);
})



http.listen(PORT, '0.0.0.0', ()=>{
  console.log('listening on port ' + PORT);
})
