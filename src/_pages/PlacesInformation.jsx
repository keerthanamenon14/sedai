import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {withStyles} from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid';
import {TextField,InputAdornment, makeStyles }from '@material-ui/core';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Typography,TableBody,TableRow,TableHead,TableContainer,TableCell } from '@material-ui/core';


const useStyles = makeStyles(()=>({
    table:{
        minWidth:'650px'
    },
    cell:{
        width:'200px',
        textAlign:'center'
    },
    tableHead:{
        width:'200px'
    },
    head:{
        fontSize:'20px',
        textAlign:'center'
    }
}))

export default function PlacesInformation (search){
    const classes = useStyles();
    const [names, setNames]=useState([])
    const places = useSelector(
        (state) => state.placesInfo.places.geonames
    )
    useEffect(()=>{
        setNames(places)
    },[places])

    return (
         <Grid>
           {names && names.length>0 ?(
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead >
                    <TableRow>                      
                        <TableCell className={classes.head} >Place</TableCell>
                        <TableCell className={classes.head}>Country Name</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {names && names.map((row,index) => {
                        return(
                        <TableRow key={index}>
                        <TableCell component="th" scope="row" className={classes.cell}>
                            {row.name}
                        </TableCell>
                        <TableCell className={classes.cell}>{row.countryName}</TableCell>
                        </TableRow>
                        )  
                    })}                      
                    </TableBody>
                </Table>
                </TableContainer>
            ):
            names && search?(
                <Grid item>
                <Typography>No Results</Typography>
                 </Grid>
            ):
            <Grid></Grid>
            }
         </Grid>
    )
}
