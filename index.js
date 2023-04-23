const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Coletai')
})

app.listen(port, () => {
  console.log(`Coletai app listening on port ${port}`)
})