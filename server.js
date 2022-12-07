let express = require('express')

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Listening server on ${port} port.`)
})

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send(__dirname + "/index.html")
})