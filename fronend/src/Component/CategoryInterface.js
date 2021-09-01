
import React,{useState} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from "@material-ui/core/Avatar";

import swalHtml from '@sweetalert/with-react';
import swal from 'sweetalert';
import { makeStyles } from '@material-ui/core/styles';
import {postDataAndImage} from "./FetchNodeService"
import {isBlank} from "./Checks";
import renderHtml from 'react-render-html'
const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    subdiv:{
        padding:20,
        width:700,
        marginTop:20,
        background:'#fff'
    },
    input:{
        display:"none",
    },
    formControl: {
        minWidth: 660,
      }
  }));
export default function CategoryInterface(props) 
{    const classes = useStyles();
    
    const [categoryName,setCategoryName]=useState('')
    const [categoryDescription,setCategoryDescription]=useState('')
    const [icon,setIcon]=useState({bytes:'',file:'/noimage.jpg'})
    const [ad,setAd]=useState({bytes:'',file:'/noimage.jpg'})
    
    const handleAd=(event)=>{
        setAd(
            {bytes:event.target.files[0],
            file:URL.createObjectURL(event.target.files[0])})
    }
    const handleIcon=(event)=>{
        setIcon(
            {bytes:event.target.files[0],
            file:URL.createObjectURL(event.target.files[0])})
    }

    const handleClick=async()=>{
     
        var error=false
        var msg="<div>"
        if(isBlank(categoryName))
        {error=true
         msg+="<font color='#e74c3c'><b>name should not be blank..</b></font><br>"
        }
        if(isBlank(categoryDescription))
        {error=true
            msg+="<font color='#e74c3c'><b>Description should not be blank..</b></font><br>"
        }
        if(isBlank(icon.bytes))
        {error=true
            msg+="<font color='#e74c3c'><b>Choose category Icon ..</b></font><br>"
        }
        if(isBlank(ad.bytes))
        {error=true
            msg+="<font color='#e74c3c'><b>Choose add icon..</b></font><br>"
        }
        msg+="</div>"
        if(error)
        {
            swalHtml(renderHtml(msg))
        }
        else
        {
        var formData = new FormData()
        formData.append("categoryname",categoryName)
        formData.append("description",categoryDescription)
        formData.append("icon",icon.bytes)
        formData.append("ad",ad.bytes)

        var config={headers:{"content-type":"multipart/form-data"}}
        var result=await postDataAndImage('categories/addnewcategory',formData,config)
        if(result){
            swal({
                title: "Category Submitted Successfully",
                icon: "success",
                button: "ok",
              });
        }
    }
    }

    return (
        <div className={classes.root}>
            <div className={classes.subdiv}>
                <Grid container spacing={1}>
                 
                 <Grid item xs={12} style={{display:'flex', justifyContent:'center',alignmentContent:'center'}}>
                    <div style={{ fontSize:22, fontWeight:700,letterSpacing:2, margin:20 }}>
                    Category Interface
                    </div>
                 </Grid>
 
                 <Grid item xs={12}>
                 <TextField onChange={(event)=>setCategoryName(event.target.value)} label="Category Name" variant="outlined" fullWidth />
                 </Grid>
                 
                 <Grid item xs={12}>
                 <TextField onChange={(event)=>setCategoryDescription(event.target.value)} label="Description" variant="outlined" fullWidth />
                 </Grid>
                 
                 <Grid item xs={6}>
                     <span style={{fontSize:16 ,fontWeight:300}}>
                        Upload Category Icon
                     </span>
                    <input onChange={(event)=>handleIcon(event)} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                     <IconButton color="primary"  component="span">
                        <PhotoCamera />
                     </IconButton>
                    </label>
                 </Grid>

                 <Grid item xs={12} sm={6} style={{display:'flex', justifyContent:'center',alignmentContent:'center'}} >
                  <Avatar variant="rounded" src={icon.file} style={{width:60, height:60}} />
                 </Grid>

                 <Grid item xs={12} sm={6}>
                     <span style={{fontSize:16,fontWeight:300}}>
                        Upload Category Add
                     </span>
                    <input onChange={(event)=>handleAd(event)} accept="image/*"  className={classes.input} id="icon-button-add" type="file" />
                    <label htmlFor="icon-button-add">
                     <IconButton color="primary"  component="span">
                        <PhotoCamera />
                     </IconButton>
                    </label>
                 </Grid>

                 <Grid item xs={12} sm={6} style={{display:'flex', justifyContent:'center',alignmentContent:'center'}} >
                  <Avatar variant="rounded" src={ad.file} style={{width:60, height:60}} />
                 </Grid>
                <Grid item xs={12}  >
              {/*  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Add Status</InputLabel>
                  <Select
                     labelId="demo-simple-select-outlined-label"
                     id="demo-simple-select-outlined"
                     label="Add Status"
                     onChange={(event)=>setAddStatus(event.target.value)}
                   >
                    <MenuItem value={'Activete'}>Activete</MenuItem>
                    <MenuItem value={'Deactivate'}>Deactivate</MenuItem>
                    </Select>
                </FormControl>
                */}
                </Grid>
                <Grid item xs={12} sm={6} style={{display:'flex', justifyContent:'center',alignmentContent:'center'}}>
                 <Button onClick={()=>handleClick()} fullWidth variant="contained" color="primary" >Save</Button>
                </Grid>
                <Grid item xs={12} sm={6}style={{display:'flex', justifyContent:'center',alignmentContent:'center'}}>
                 <Button fullWidth variant="contained" color="secondary" >Reset</Button>
                </Grid>

                 </Grid>
            </div>
        </div>
    )
}
