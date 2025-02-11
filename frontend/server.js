const express = require('express');
const path = require('path');
const PORT = process.env.PORT ||3001;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
 
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => console.log(`Appp running on port ${PORT}`));