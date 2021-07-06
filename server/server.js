const express = require('express');
const cors = require('cors');
const appServer = express();

require('./config/mongoose.config');

appServer.use(cors());
appServer.use(express.json());
appServer.use(express.urlencoded({ extended: true }));

require('./routes/app.routes')(appServer);

appServer.listen(8000, () => {
    console.log("Listening at Port 8000")
})
