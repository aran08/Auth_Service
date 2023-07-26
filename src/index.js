const express = require('express');

const {PORT} = require('./config/serverConfig');

const app = express();

const prepareAndStartService = () => {

    app.listen(PORT, () => {
        console.log(`Server Started on port : ${PORT}`);
    })
}

prepareAndStartService();