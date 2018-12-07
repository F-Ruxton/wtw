const express    = require('express');
const config     = require('./config');
const middleware = require('./middleware');
const apis       = require('./apis');
const path       = require('path');

const PORT = process.env.PORT || config.CONSTANTS.PORT;
const app  = express();

middleware.install(app);
apis.register(app);

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'build/index.html'));
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
