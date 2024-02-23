import reducer from "./Reducer";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer }, {}, applyMiddleware());

export default store;
