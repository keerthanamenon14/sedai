import storage from 'redux-persist/lib/storage/session'
import {combineReducers} from "redux"
import {getInformationReducer} from "../_reducers/getInformationReducer"

const persistConfig = {
    key :"root",
    storage
}

const rootReducer = combineReducers({
    placesInfo : getInformationReducer
})

export default (persistConfig,rootReducer)