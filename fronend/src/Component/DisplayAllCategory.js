import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Avatar from "@material-ui/core/Avatar";
import swalhtml from "@sweetalert/with-react";
import swal from "sweetalert";
import {
    ServerURL,
    postData,
    postDataAndImage,
    getData,
  } from "./FetchNodeService";
  import {isBlank} from "./Checks";
  import renderHTML from "react-render-html";

  const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
      }, 
    title:{
        marginLeft:theme.spacing(2),
        flex:1,
    },
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
   const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function DisplayAllCategory(props){
    const [list,setList]=useState()
    const classes = useStyles();
    
///////////edit form/////////////
    const[categoryID,setCategoryID]=useState("");
    const [categoryName,setCategoryName]=useState('');
    const [categoryDescription,setCategoryDescription]=useState('');
    const [icon,setIcon]=useState({bytes:'',file:'/noimage.jpg'});
    const [ad,setAd]=useState({bytes:'',file:'/noimage.jpg'});
    const [addStatus,setAddStatus]=useState('');
    const [iconSaveCancel,setIconSaveCancel]=useState(false);
    const [adSaveCancel,setAdSaveCancel]=useState(false);
    const [getRowData,setRowData]=useState([]);
    //const [offer,setOffer]=useState('');
   
    const handleAd=(event)=>{
        setAd(
            {bytes:event.target.files[0],
            file:URL.createObjectURL(event.target.files[0]),
        });
        setAdSaveCancel(true);
    }

    const handleIcon=(event)=>{
        setIcon(
            {bytes:event.target.files[0],
            file:URL.createObjectURL(event.target.files[0]),
        });
        setIconSaveCancel(true);
    };

    const handleDelete = async () => {
        var body={categoryid:categoryID}
       var result=await postData("categories/deletecategory",body)
       if (result) {
        swal({
          title: "Category Deleted Successfully",
          icon: "success",
          dangerMode: true,
        });
      }
      else
      {
        swal({
          title: "Fail to Delete Record",
          icon: "success",
          dangerMode: true,
        });
      }
    
    }

    const handleClick=async()=>{
     
        var error=false;
        var msg="<div>"
        if(isBlank(categoryName))
        {error=true;
         msg+="<font color='#e74c3c'><b>name should not be blank..</b></font><br>";
        }
        if(isBlank(categoryDescription))
        {error=true;
            msg+="<font color='#e74c3c'><b>Description should not be blank..</b></font><br>";
        }
        if(isBlank(addStatus))
        {error=true;
            msg+="<font color='#e74c3c'><b>AddStatus should not be blank..</b></font><br>";
        }
        msg+="</div>";
        if(error)
        {
            swalhtml(renderHTML(msg));
        }
        else
        {
        var body={ 
          categoryid:categoryID,
          categoryname:categoryName,
          description:categoryDescription,
          addstatus:addStatus,
         }      
        var result=await postData('categories/editcategorydata',body)
        if(result){
            swal({
                title: "Category Updated Successfully",
                icon: "success",
                button: "ok",
              });
        }
    }
    };

    const handleCancelIcon=()=>{
      setIconSaveCancel(false)
      setIcon({bytes:"",file:`${ServerURL}/images/${getRowData.icon}` })
    }
    const handleCancelAd=()=>{
        setAdSaveCancel(false)
        setAd({bytes:"",file:`${ServerURL}/images/${getRowData.ad}` })
    }
    
    const handleClickSaveIcon=async()=>{
        var formData = new FormData()
        formData.append("categoryid",categoryID)
        formData.append("icon",icon.bytes);
        var config={headers:{"content-type":"multipart/form-data"}}
        var result=await postDataAndImage(
          'categories/editicon',
          formData,
          config
        )
        if(result){
            swal({
                title: "Icon Upadated Successfully",
                icon: "success",
                button: "ok",
              });
              setIconSaveCancel(false)
        }
    };

    const handleClickSaveAd=async()=>{
        var formData = new FormData()
        formData.append("categoryid",categoryID)
        formData.append("ad",ad.bytes);
        var config={headers:{"content-type":"multipart/form-data"}}
        var result=await postDataAndImage('categories/editad',formData,config)
        if(result){
            swal({
                title: "Ad Upadated Successfully",
                icon: "success",
                button: "ok",
              });
              setAdSaveCancel(false);
        }
    }


    const editFormView=()=>{    
        return(
            
            <div className={classes.root}>
            <div className={classes.subdiv}>
                <Grid container spacing={1}>
                <Grid item xs={12} 
                    style={{
                      display:'flex',
                      justifyContent:'center',
                      alignmentContent:'center'
                      }}
                >
                  <div style={{ 
                    fontSize:22,
                    fontWeight:700,
                    letterSpacing:2,
                    margin:20 
                  }}>
                    Category Interface
                    </div>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    value={categoryName} 
                    onChange={(event)=>setCategoryName(event.target.value)} 
                    label="Category Name" 
                    variant="outlined" 
                    fullWidth 
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField 
                    value={categoryDescription}
                    onChange={(event)=>setCategoryDescription(event.target.value)}
                    label="Description" 
                    variant="outlined" 
                    fullWidth />
                </Grid>
                
                <Grid item xs={6}>
                    <span style={{fontSize:16 ,fontWeight:300}}>
                      Edit Category Icon  
                    </span>
                    <input 
                        onChange={(event)=>handleIcon(event)} 
                        accept="image/*" 
                        className={classes.input} 
                        id="icon-button-file" 
                        type="file" />
                    <label htmlFor="icon-button-file">
                    <IconButton 
                        color="primary" 
                        area-label="upload Picture"  
                        component="span">
                        <PhotoCamera />
                    </IconButton>
                    </label>
                </Grid>

                <Grid 
                  item xs={12} 
                  sm={6} 
                  style={{
                      display:'flex',
                       justifyContent:'center',
                       alignmentContent:'center',
                       flexDirection:'column'
                       }} >
                <Avatar
                   variant="rounded" 
                   src={icon.file} 
                   style={{width:60, height:60}} 
                />
                {iconSaveCancel ? (
                  <span>
                      <button 
                       onClick={()=>handleClickSaveIcon() }
                       color="secondary">Save
                       </button>{" "}
                       <button 
                       onClick={()=>handleCancelIcon()}
                       color="secondary">Cancel
                       </button>
                    </span>
                ) : (
                  <></>
                )}

                </Grid>

                <Grid item xs={12} sm={6}>
                    <span style={{fontSize:16,fontWeight:300 }}>
                       Edit Category Add
                    </span>

                    <input 
                     onChange={(event)=>handleAd(event)} 
                     accept="image/*"  
                     className={classes.input}
                     id="icon-button-add" 
                     type="file" />
                    
                    <label htmlFor="icon-button-add">
                    <IconButton 
                      color="primary"
                      area-label="upload picture"
                      component="span"
                    >
                    <PhotoCamera />
                  </IconButton>
                 </label>
                </Grid>

                <Grid 
                  item xs={12} 
                  sm={6} 
                  style={{
                      display:'flex', 
                      justifyContent:'center',
                      alignmentContent:'center',
                      flexDirection:'column',
                      }} >
                <Avatar 
                    variant="rounded" 
                    src={ad.file} 
                    style={{width:60, height:60}} 
                 />
                { adSaveCancel ?(
                  <span>
                    <button onClick={()=>handleClickSaveAd()} color="secondary">
                      Save
                    </button>
                    <button  color="secondary" onClick={()=>handleCancelAd()} >
                      Cancel
                    </button>
                  </span>
                ):(
                <></>
                )}
                </Grid>
               
            </Grid>
          </div>
        </div>
       );
     };
    ///////////////Edit Dialog///////////////
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (rowData) => {
      setRowData(rowData);
      setOpen(true);
      setCategoryID(rowData.categoryid);
      setCategoryName(rowData.categoryname);
      setCategoryDescription(rowData.description);
      setIcon({ bytes: "", file: `${ServerURL}/images/${rowData.icon}` });
      setAd({ bytes: "", file: `${ServerURL}/images/${rowData.ad}` });
      setAddStatus(rowData.addstatus);
    };
  
    const handleClose = () => {
      setOpen(false);
      fetchAllCategory();
    };
  
    const showEditDialog = () => {
      return (
        <div>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Edit/Delete Mobile Categories
                </Typography>
                <Button autoFocus color="inherit" onClick= {() => handleClick()}>
                  Update
                </Button>
                <Button autoFocus color="inherit" onClick={handleDelete}>
                  Delete
                </Button>
              </Toolbar>
            </AppBar>
            {editFormView()}
          </Dialog>
        </div>
      );
    };
////////////////////////////////
    const fetchAllCategory=async()=>{
        var result=await getData("categories/displayall")
        setList(result);
    };

    useEffect(function(){
        fetchAllCategory();
    },[]);

    function displayAll() {
        return (
          <div>  
          <MaterialTable
            title="Category List"
            columns={[
              { title: 'Id', field: 'categoryid' },
              { title: 'Name', field: 'categoryname' },
              { title: 'Description', field: 'description' },
              { title: 'Icon', field: 'icon', 
                 
                render: (rowData) => (
                 <div>
                     <img src={`${ServerURL}/images/${rowData.icon}`} 
                    alt="FNF"
                    style={{borderRadius:5}}
                      width='40'
                      height='40'/> 
                </div>
                ),
              },
              { 
                title: 'Ad',
                field: 'ad',
               render: (rowData) =>(
               <div>
                   <img src={`${ServerURL}/images/${rowData.ad}`} 
                        alt="FNF"
                        style={{borderRadius:5}} width='40' height='40'/> 
                </div>
               ),
              },
            ]}
            data={list}        
            actions={[
              {
                icon: 'editoutlined',
                tooltip: 'Edit Categories',
                onClick: (event, rowData) => handleClickOpen(rowData),
              },
            ]}
          />
          {showEditDialog()}
        </div>
    );
  }

      return (
        <div 
          style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
        <div
          style={{
            width:900,
            marginTop:10,
            padding:3,
             background:'#f1f2f6'
          }}
        >
            {displayAll()}
        </div>        
      </div>
    );
}

