const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const configPrototypes = require('./shared/prototypes')

configPrototypes()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/costumers', require('./routes/costumers'))

app.listen(port, () => {
    console.log(`sever listening on port ${port}`)
})