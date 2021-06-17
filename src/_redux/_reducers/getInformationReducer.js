import * as types from "../_constants"

const initialState = {
    loading: false,
    places : "",
    error: null,
}

export const getInformationReducer = (state =initialState, action) =>{
    switch(action.type){
        case types.GET_INFO_SUCCESS:
            return {
                ...state,
                loading:true,
                places:action.payload,
                error: null
            };
            break;
        case types.GET_INFO_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload,
                places:''
            }
            break;
        case types.CLEAR_STATE:
            return{
                ...state,
                error:'',
                places:''
            }
        default:
            return state;
    }
}