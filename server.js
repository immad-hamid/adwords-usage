const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

// controllers
const client = require('./controllers/client');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'helloworld',
        database: 'app_test'
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

// root
app.get('/', (req, res) => {
    res.json("Api Working");
})

// // get user
app.get('/client/:id', client.handleClient(db));

// serving our applicaiton
app.listen(3000, () => {
    console.log('server is working at port 3000');
});