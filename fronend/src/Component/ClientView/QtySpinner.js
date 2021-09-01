import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {

    background:'#1e6b7b',
    width:theme.spacing(4),
    height:theme.spacing(4),  
},
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    
    },
}));

export default function QtySpinner(props) {
  const classes = useStyles();
  const [value,setValue]=useState(props.value)

  const handleIncrement=()=>{
        var c=value+1;
        setValue(c);
        props.onChange(c)
    }

    const handleDecrement=()=>{
      var c=value-1;
      if(c>=0){
        setValue(c);
        props.onChange(c)
      }
    }
    return(
    <div>
       {value===0 ? (<div style={{display:'flex',alignItems:'center' ,flexDirection:'row'}}><Button variant='contained' style={{background:'#1e6b7b',color:'#fff',fontSize:12,width:180}}  onClick={()=>handleIncrement()}>ADD TO CART</Button></div>):(<div style={{display:'flex',alignItems:'center' ,flexDirection:'row'}}><Avatar onClick={()=>handleDecrement()} style={{marginRight:15}} className={classes.orange}>-</Avatar>
         <div style={{display:'flex',justifyContent:'center',fontSize:16,fontWeight:'bold',width:15}}>{value}</div>
        <Avatar 
            onClick={()=>handleIncrement()}
            style={{marginLeft:15}} 
            className={classes.orange}
        >+</Avatar></div>)}
    </div>
    )
}