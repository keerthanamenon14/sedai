import axios from "axios"
import {
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
    CLEAR_STATE
}from "../_redux/_constants"

export const fetchPlacesSuccess = (places) =>{
    return {
        type:GET_INFO_SUCCESS,
        payload: places
    }
}

export const fetchPlacesFailure = (error) =>{
    return {
        type:GET_INFO_FAILURE,
        payload: error
    }
}

export const fetchPlaces = (value) =>{
    return(dispatch) =>{
        return axios
        .get("http://api.geonames.org/searchJSON?", {
            params:{
                name_startsWith:value,
                maxRows:5,
                username:'keerthanamenon14'
            }
        })
        .then((response)=>{
            const places = response.data;
            dispatch (fetchPlacesSuccess(places));
        })
        .catch((error)=>{
            const errorMsg = error.response.data.message;
            dispatch(fetchPlacesFailure(errorMsg))
        })
    }
}

export const clearState = () =>{
    return {type: CLEAR_STATE};
}