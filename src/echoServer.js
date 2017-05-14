import express from 'express'
import randomHello from './hola'

const app = express()

app.get('/', (req, res) => { 
  res.send(randomHello('Hello')) 
})

app.listen(3000, () => { 
  console.log('Example app listening on port 3000!');
})
