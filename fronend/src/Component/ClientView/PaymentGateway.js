import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {ServerURL,postData} from "../FetchNodeService"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
 
 
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subdiv: {
    width: 550,
    padding: 20,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  card: {
    border: "1px solid #bdc3c7",
    width:250
  },
  cardactionarea: {
    borderBottom: "1px solid #bdc3c7",
    borderTop: "2px solid #bdc3c7",
  },
  cardmedia: {
    borderBottom: "1px solid #bdc3c7",
     },
});

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
  margin: {
    marginRight: "80%",
    paddingLeft: "",
  },
  button: {
    margin: theme.spacing.unit,
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const PaymentGateway = (props) => {
  var dispatch = useDispatch();
  var cart = useSelector((state) => state.cart);
  var client = useSelector((state) => state.client);
  var user = Object.values(client)[0];
  var keys = Object.keys(cart);
  var values = Object.values(cart);
  var totalamt = values.reduce(calculate, 0);
  function calculate(prev, item) {
    var price =
      item.offer === 0
        ? item.qtydemand * item.price
        : item.qtydemand * (item.price-item.offer);
    return prev + price;
  }
 
  const [getUserData, setUserData] = useState(user);
  const handleCashOnDelivery = () => {
     client[user.mobileno]["PaymentMode"] = "Cash On Delivery";
    // props.history.push({'pathname':'/page2'})
    handleSubmitOrder("Cash On Delivery",'none')
  };

  const handleOnLinePayment = () => {
   client[user.mobileno]["PaymentMode"] = "Online Payment";
   openPayModal()
  };
  
  const handleSubmitOrder=async(paymentmode,transactionid)=>{
    var d=new Date()
    var cd=d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()
    var ct=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()

    var body={orderdate:cd,ordertime:ct,totalamount:totalamt,emailid:user.emailid,mobileno:user.mobileno,paymentmode:paymentmode,transactionid:transactionid}
   
    var result=await postData("orders/generateorderno",body);
    alert(result.result + "," + result.orderid);
    if(result.result){
   //   alert(JSON.stringify(result))
         body={
          orderid:result.orderid, 
          orderdate:cd,
          ordertime:ct,
          mobileno:user.mobileno,
          emailid:user.emailid,
          username:user.firstname+" "+user.lastname,
          address1:user.address1, 
          address2:user.address2, 
          state:user.state, 
          city:user.city,
          cart:values,

          paymentmode:paymentmode, 
          totalamount:totalamt, 
          deliverystatus:'pending',
          
        };
     //   alert(JSON.stringify(body))
        var res=await postData("orders/submitorder",body);
        alert(res.result);
      }
  }
  
  const options = {
    key: "rzp_test_e1WBIg6y3arw0S",
    amount: 1000, //  = INR 1
    name: "Mobile Shop",
    description: 'Online Shop',
    image:`${ServerURL}/images/logo.jpg`  ,
    handler: function (response) {
         
        alert(response.razorpay_payment_id);
    },
    prefill: {
      name: getUserData.firstname + " " + getUserData.lastname,
      contact: getUserData.mobileno,
      email: getUserData.emailid,
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const classes = useStyles();

  return (
    
    
      <div>
      <Header history={props.history} />

      <div className={classes.root}>
        <div className={classes.subdiv}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardactionarea}>
                  <CardMedia
                    className={classes.cardmedia}
                    component="img"
                    alt="Cash on Delivery"
                    image="/cash.png"
                    title="Cash on Delivery"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cash on Delivery
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                     </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleCashOnDelivery()}
                  >
                    Cash on Delivery
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardactionarea}>
                  <CardMedia
                    className={classes.cardmedia}
                    component="img"
                    alt="Online Payment"
                    image="/online1.png"
                    title="Online Payment"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Online Payment

                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                     
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleOnLinePayment()}
                  >
                    Online Payment
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>


    
  );
};
export default withStyles(styles)(PaymentGateway);