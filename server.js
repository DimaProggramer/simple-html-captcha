// its a server file, you can custom it
// if im make an error in this text, sorry, im bad in english
const express = require('express');
const path = require('path');                                                                               const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, '')));                                                 
app.get('/', (req, res) => {                            res.sendFile(path.join(__dirname, 'index.html'));    });                                   app.listen(port, () => {
  console.log(`runned at ${port} port`);
});
