/**
 * Created for DevOps course on 21/11/2016.
 */
const express = require('express');
var jade = require('jade');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

var nbVisit = 0;

app.get('/', (req, res) => {
    res.render('index',
        { nbVisit : ++nbVisit }
    );
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});