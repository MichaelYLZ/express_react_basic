const express = require('express');
const app = express();

app.use(express.static('dist'));
app.get('/api/name', (req,res) => {
    res.send({name: 'Mike'})
})
app.listen(8001, () => console.log('Listening on port 8001!'));
