import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import {fetchPlaces,clearState} from "../_redux/getInformationAction"
import PlacesInformation from "../_pages/PlacesInformation"
import useDebounce  from '../useDebounce'
import Grid from '@material-ui/core/Grid';
import {TextField,InputAdornment, makeStyles }from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles(()=>({
    container:{
        padding:'10px',
        justifyContent:'center',
        alignItems:'center'
    },
    searchBox : {
        marginBottom:"30px"
    }
}))

export default function Search () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const debounce = useDebounce();
    const [search,setSearch] = useState(false);

    const searchPlace = (value) =>{
        if(value)
        {
            setSearch(true)
            dispatch(fetchPlaces(value))
        }
        else{
            setSearch(false)
            dispatch(clearState())
        }
    }

    return (
       <Grid container className={classes.container} direction="column">
          <Grid item className={classes.searchBox}>
              <TextField
              id="search_places"
              label='Search places'
              InputProps={{
                  endAdornment:(
                      <InputAdornment>
                        <SearchRoundedIcon/>
                      </InputAdornment>
                  ),            
              }}
              onChange={(e)=>debounce(()=>searchPlace(e.target.value))}
              />
          </Grid>
          <Grid item>
          <PlacesInformation search={search}/>
          </Grid>
       </Grid> 
    )
}