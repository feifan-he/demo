const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.static('volume'));

app.get('/visitedLinks', (req, res) => {
  res.json({
    page1: 13,
    page2: 55,
    page3: 10,
  });
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
