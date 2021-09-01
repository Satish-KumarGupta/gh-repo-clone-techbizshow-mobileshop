import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider, TextField } from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { ServerURL,postData } from "../FetchNodeService";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import Footer from "./Footer";
import QtySpinner from "./QtySpinner";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';


const useStyles = makeStyles((theme) => ({
  itemRoot: {
    display: "flex",
    flexDirection: "column",
  },

  itemSubroot: {
    display: "flex",
    flexDirection: "row",
    padding: "15px",
    justifyContent: "space-between",
  },

  itemIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  itemHeading: {
    padding: "15px",
  },

  superRoot: {
    display: "flex",
    flexDirection: "row",
    background: "#F6F6F7",
  },

  cartRoot: {
    display: "flex",
    flexDirection: "row",
    padding: "60px",
    paddingTop: "10px",
  },

  cartSubroot: {
    display: "flex",
    flexDirection: "column",
  },

  cartContainer: {
    background: "#fff",
    borderRadius: "10px",
    padding: "25px",
  },

  cartHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "10px",
  },

  paymentRoot: {
    display: "flex",
    flexDirection: "row",
    padding: "40px",
    paddingTop: "10px",
  },

  paymentSubroot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  paymentContainer: {
    background: "#fff",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "10px",
    width: "110%",
  },

  paymentHeading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  paymentInformation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width:300,
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    width: 350,
    padding:10,
  },
  fullList: {
    width: 'auto',
  },

}));

export default function MakePayment(props) {
  const classes = useStyles();

  const [address1,setAddress1]=useState('')
  const [address2,setAddress2]=useState('')
  const [city,setCity]=useState('')
  const [states,setStates]=useState('')
  const [zipcode,setZipcode]=useState('')
  const [status, setStatus] = useState(false)

  const handleSaveAddress=async()=>{
    var body={address1:address1,address2:address2,city:city,state:states,zipcode:zipcode,mobileno:user.mobileno}
    var result=await postData("userdetails/updateuserdetails",body);
    
    // console.log(result.result); 
    if(result.result)
    {
     var res = await postData("userdetails/chkuserbymobileno", body);
     if (res.result) {
       dispatch({ type: "ADD_CLIENT", payload: [res.data.mobileno, res.data] });
       setStatus(!status);
     }
     
    }
    else
    {
      alert("Fail to Save Address....")
    }
    
  } //catch(e){alert(e)} 
  
    
///////////Drawer///////

const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <div
    className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })}
    role="presentation"

  >
    
    <Grid container spacing={1}> 
    
    <Grid item xs={12}> 
    <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
     <div style={{fontSize:14,fontWeight:'bold'}}> Hey {user.firstname}</div>
      <div><img src="/del.jpg" width="100" alt="FNF"/></div>
      <div style={{fontSize:12,fontWeight:'bold'}}> Put your Delivery Address</div>
      </div>
    </Grid>
    <Grid item xs={12}>
      <Divider />
    </Grid>
    <Grid item xs={12}>
      <TextField onChange={(event)=>setAddress1(event.target.value)} label='Address one' variant='outlined' fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField onChange={(event)=>setAddress2(event.target.value)} label='Address Two' variant='outlined' fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField onChange={(event)=>setCity(event.target.value)} label='City' variant='outlined' fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField onChange={(event)=>setStates(event.target.value)} label='State' variant='outlined' fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField onChange={(event)=>setZipcode(event.target.value)} label='PinCode' variant='outlined' fullWidth />
    </Grid>
    <Grid item xs={12}>
      <Button onClick={()=>handleSaveAddress()}
      style={{ background: '#1e6b7b',color:'#fff'  }} variant="contained" color='#1e6b7b' fullWidth >
       Save Address </Button>
    </Grid>

    </Grid>
  </div>
);


////////////////////

  var cart = useSelector((state) => state.cart);
  var client = useSelector((state) => state.client);
  var user = Object.values(client)[0];
  const [refresh, setRefresh] = useState(false);
  var dispatch = useDispatch();
  var keys = Object.keys(cart);
  var values = Object.values(cart);
  var totalsaving = values.reduce(calculatesaving, 0);
  var totalrate = values.reduce(calculaterate, 0);
  var totalamt = totalrate - totalsaving;

  function calculatesaving(a, b) {
    var price = b.qtydemand * b.offer;
    return a + price;
  }
  function calculaterate(a, b) {
    var price = b.qtydemand * b.price;
    return a + price;
  }

  const handleDelete = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: [item.productid] });
    setRefresh(!refresh);
  };

  const handleQtyChange = (value, item) => {
    item["qtydemand"] = value;
    dispatch({ type: "ADD_ITEM", payload: [item.subcategoryid, item] });
    setRefresh(!refresh);
    
  };

  const handlePlaceOrder = () => {
    props.history.push({ pathname: "/paymentgateway" });
  };

  const showCartItems = () => {
    return values.map((items) => {
      return (
        <div className={classes.itemRoot}>
          <div className={classes.itemSubroot}>
            <div>
              <img
                src={`${ServerURL}/images/${items.icon}`}
                alt="FNF"
                width="80"
                height="80"
              />
            </div>
            <div className={classes.itemHeading}>
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "600", fontSize: "18px" }}>
                  {items.subcategoryname}
                </span>
              </div>
              <div>
                <span
                  style={{
                    padding: "4px",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  &#8377;{items.price-items.offer}.00
                </span>
                <span
                  style={{ padding: "4px", color: "grey", fontWeight: "200" }}
                >
                  <s>&#8377;{items.price}.00</s>
                </span>
                <span
                  style={{
                    padding: "4px",
                    color: "#00A100",
                    fontWeight: "400",
                  }}
                >
                  You Save &#8377;{items.offer}.00
                </span>
              </div>
            </div>
            <div className={classes.itemIcons}>
              <div>
                <DeleteOutline onClick={() => handleDelete(items)} />
              </div>
              <div>
                <QtySpinner
                  value={items.qtydemand}
                  onChange={(value) => handleQtyChange(value, items)}
                />
              </div>
            </div>
          </div>
          <div>
            <Divider />
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Header />
      <br />
      <br />
      <div className={classes.superRoot}>
        <div className={classes.cartRoot}>
          <div className={classes.cartSubroot}>
            <div>
              <h2>My Cart ({keys.length})</h2>
            </div>
            <div className={classes.cartContainer}>
              <div className={classes.cartHeading}>
                <div>
                  <h3>Mobile Shop Basket ({keys.length} items)</h3>
                </div>
                <div>
                  <h3>&#8377; {totalamt}.00</h3>
                </div>
              </div>
              <div>
                {values.length !== 0 ? (
                  <div>{showCartItems()}</div>
                ) : (
                  <div>
                    <img src="/empty-cart-icon.png" alt="FNF" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.paymentRoot}>
          <div className={classes.paymentSubroot}>
            <div>
              <h2>Stepper</h2>
            </div>
            <div className={classes.paymentContainer}>
              <div className={classes.paymentHeading}>
                <div className={classes.paymentInformation}>
                  <div style={{display:'flex',flexDirection:'column'}}>
                  <div>
                    <h3>Delivery Address</h3>
                  </div>
                  <div style={{fontSize:18,fontWeight:'bolt'}}>
                  {user.firstname} {user.lastname}
                  </div>
                  <div>
                 {!user.addressstatus ?(<Button style={{fontSize:14,fontWeight:'bold',marginTop:10,width:300}} 
                   variant="contained" color="primary" onClick={toggleDrawer('right', true)}>
                    Add Address
                  </Button>):(<div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{marginTop:3,marginBottom:3}}>
                      {user.address1}
                    </div>
                    <div style={{marginTop:3,marginBottom:3}}>
                      {user.address2}
                    </div>
                    <div style={{marginTop:3,marginBottom:3}}>
                      {user.city}
                   </div>
                   <div style={{marginTop:3,marginBottom:3}}>
                    {user.state}
                   </div>

                    </div>)
                  } 
                </div>

                </div>
                </div>
              </div>
            </div>

            <div className={classes.paymentContainer}>
              <div className={classes.paymentHeading}>
                <div>
                  <h3>Payment Details</h3>
                </div>
                <div>
                  <div
                    style={{ marginBottom: "4px", marginTop: "4px" }}
                    className={classes.paymentInformation}
                  >
                    <div>
                      <span
                        style={{
                          padding: "4px",
                          color: "grey",
                          fontWeight: "400",
                        }}
                      >
                        MRP Total
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "400" }}>
                        &#8377; {totalrate}.00
                      </span>
                    </div>
                  </div>
                  <Divider />
                  <div
                    style={{ marginBottom: "4px", marginTop: "4px" }}
                    className={classes.paymentInformation}
                  >
                    <div>
                      <span style={{ color: "grey", fontWeight: "400" }}>
                        Product Discount
                      </span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "400" }}>
                        - &#8377; {totalsaving}.00
                      </span>
                    </div>
                  </div>
                  <Divider />
                  <div
                    style={{ marginBottom: "4px", marginTop: "4px" }}
                    className={classes.paymentInformation}
                  >
                    <div>
                      <span style={{ fontWeight: "600" }}>Total Amount</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "600" }}>
                        &#8377; {totalamt}.00
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <span
                      style={{
                        padding: "4px",
                        color: "#00A100",
                        fontWeight: "400",
                      }}
                    >
                      You Save &#8377;{totalsaving}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.icon}>
              <Button
                style={{ background: "#008ECC", color: "#FFF" }}
                fullWidth
                onClick={() => handlePlaceOrder()}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <React.Fragment key={'right'}>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
       </div>

      <Footer />
    </div>
  )

  }