const exp = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')


const app= exp()
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(bodyParser.json());
app.use('/transactions',routes)

app.listen(PORT, HOST, ()=>{
    console.log(`Running on http://${HOST}:${PORT}` )
})