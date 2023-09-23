import { legacy_createStore } from "redux";
import basicReducer from "./Reducer";

const myStore = legacy_createStore(basicReducer);

export default myStore;
