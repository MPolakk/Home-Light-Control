const express = require('express');

const cors = require('cors');
const app = express();
const port = 3001;
const bodyParser = require('body-parser')
const connection = require('./connection')
const jsonParser = bodyParser.json()





app.use(cors())


app.get('/', async (req, res) => {

 

  const devices = await connection.getDevices();
  res.send(devices)


  


})

app.post('/', jsonParser, async (req,res) => {
 
  const status = await connection.toggleDevice(req.body.deviceid);
  console.log(status)
})




app.listen(port, ()=> console.log('Server działa'))
