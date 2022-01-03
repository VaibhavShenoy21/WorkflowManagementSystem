import { AppBar, Button, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme)=>({
    AppBar:{
        background:'None'
    },
    title:{
        flexGrow:1,
    },
    btn:{
        color:'#fff',
        backgroundColor:'#000',
    }
}))
export default function TopBar({setOpenSideMenu}) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='static' className={classes.AppBar} elevation={0}>
                <Toolbar>
                <h1 className={classes.title}>Daily Todo</h1>
                <Button className={classes.btn} onClick={()=> setOpenSideMenu(true)}>Change Background</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
