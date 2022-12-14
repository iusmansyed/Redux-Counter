import { combineReducers } from "redux";
import amountReducer from './amoutReducer';

const reducers = combineReducers (
    {
        amount: amountReducer
    }
)
export default reducers