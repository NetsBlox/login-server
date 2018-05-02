const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8000;
const SERVER_ADDRESS = process.env.EDITOR_ADDRESS;

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));

console.log('authenticating with', SERVER_ADDRESS);
app.get('/index.html', (req,res) => res.render('index.pug',{SERVER_ADDRESS: SERVER_ADDRESS}));

app.listen(PORT, err => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${PORT}`);
});
