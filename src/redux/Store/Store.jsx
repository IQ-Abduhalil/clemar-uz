import { createStore } from "redux";
import { CountReducer } from "../Reducer/Reducer";

export const Store = createStore(CountReducer);
