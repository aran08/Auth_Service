const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

//const UserService= require('./services/user-service');

const app = express();

const prepareAndStartService = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on port : ${PORT}`);
        

    // const service = new UserService();
    // // const newToken = service.createToken({email:'aranjaish2308@gmail.com', id:1});
    // // console.log(" New Token is : ", newToken);
    // // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyYW5qYWlzaDIzMDhAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTY5MDUzMTUzMSwiZXhwIjoxNjkwNTM1MTMxfQ.r5eXpwl07Vkr_nxhQguwxim4tE9hd9zEg4x4RZIHAcU'
    // // const respone = service.verifyToken(token);
    // // console.log(respone);

    })
}

prepareAndStartService();