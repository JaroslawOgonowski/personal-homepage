import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import mySlice from "./mySlice";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        a: mySlice,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run();

export default store;