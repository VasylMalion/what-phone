// routes
import {router as loginRouter} from "./loginRouter";
import {router as findPhoneRouter} from "./findPhoneRoter";
import {router as registrationRouter} from "./registrationRouter";
import {router as checkRouter} from "./registrationRouter";
import {router as yourRouter} from "./yourPhonesRouter";
import {router as addUserRouter} from "./addUserRouter";
import {router as filtersRouter} from "./filtersRouter";

// middlewares
import {auth} from "../middlewares/auth";

const allRoutes = server => {
    server.use('/api/registration', registrationRouter);
    server.use('/api/find-phone', findPhoneRouter);
    server.use('/api/login', loginRouter);
    server.use('/api/auth', auth, checkRouter);
    server.use('/api/your-phones', yourRouter);
    server.use('/api/add-user', addUserRouter);
    server.use('/api/filters', filtersRouter);
    server.use('/', () => 'Hello from WhatPhone');
}

export {
    allRoutes
}

