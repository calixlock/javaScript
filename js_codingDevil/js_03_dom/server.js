const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.sendFile(__dirname + '/dom_index.html');

// res.send('server start!\n port:3000')

// res.json({
//     success: true,
// });
})

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});