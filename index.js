import express from 'express';
import fetch from 'node-fetch';
const app = express()
const port = 5000;

//middleware
app.use(express.json())


app.get('/users', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    res.send(data)
})

app.get('/', (req, res) => {
    res.send('Hexadecimal server is ready')
})

app.listen(port, () => {
    console.log("running on", port)
})