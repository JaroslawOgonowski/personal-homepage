import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import themeSwitchReducer from "./common/PageHeader/ThemeSwitchButton/themeSwitchSlice";
import rootSaga from "./rootSaga";
import portfolioReducer from "./features/Portfolio/portfolioSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
    themeSwitch: themeSwitchReducer,
    portfolio: portfolioReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;