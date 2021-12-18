import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles , fade} from '@material-ui/core';
import storeApi from '../../utils/storeApi';

const useStyle = makeStyles((theme)=>({
    card:{
        width:'280px',
        margin: theme.spacing(0,1,1,1),
        paddingBottom: theme.spacing(4),
    },
    input:{
        margin: theme.spacing(1),
    },
    btnConfirm:{
        background:'#5AAC44',
        color: '#fff',
        "&:hover":{
            background: fade('#5AAC44', 0.75),
        }
    },
    confirm:{
        margin: theme.spacing(0,1,1,1),
    }
}))

export default function InputCard({setOpen, listId, type}) {
    const classes = useStyle();
    const {addMoreCard , addMoreList} = useContext(storeApi);
    const [title,setTitle] = useState('');
    const handleOnChange = (e)=> {
        setTitle(e.target.value);
    };
    const handleBtnConfirm =()=>{
        if (type == 'card'){
        addMoreCard(title, listId);
        setTitle('');
        setOpen(false);
        }
        else{
            addMoreList(title);
            setTitle('');
            setOpen(false);
        }
    };

    return (
        <div>
            <div>
            <Paper className={classes.card}>
                <InputBase  onChange={handleOnChange}
                multiline fullWidth inputProps={{
                    className: classes.input,
                }}
                value = {title}
                placeholder={type == 'card'?"Enter the title of this Card..":"Enter List title.."}
                />
            </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>{type == "card"?"Add Card":"Add List"}</Button>
                <IconButton onClick= {()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}