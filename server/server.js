const express = require('express');
const app = express();
const s3Controller = require('./src/s3-controller');

app.get('/', (reg, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.post('/upload-to-s3', s3Controller.s3Upload);

app.get('/all-files', s3Controller.s3Get);

app.get('/get-object-url/:key', s3Controller.getSignedUrl);

const port = process.env.port || '1507';
app.listen(port, () =>{
    console.log('App listening on: '+port);
});

