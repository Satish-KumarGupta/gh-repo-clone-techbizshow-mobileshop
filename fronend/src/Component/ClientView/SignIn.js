import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import { ServerURL,postData } from "../FetchNodeService";
import { isEmpty, isMobile } from "../../Component/Checks";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import OtpGenerator from "otp-generator";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  grow: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "25ch",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [mobileno, setMobileNo] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  const [otp, setOtp] = useState();
  const [gotp, setGOtp] = useState();
  var dispatch = useDispatch();
  const handleVerify = () => {
   
    if (otp === gotp) props.history.push({ pathname: "/showcart" });
    else alert("Invalid Otp....");
  };
  const handleCheckUserMobileNumber = async () => {
    var error = false;
    if (isEmpty(mobileno)) {
      error = true;
      setMsg("Pls Input Mobile Number...");
    } else {
      if (!isMobile(mobileno)) {
        error = true;
        setMsg("Invalid Mobile Number Pls Input Valid Mobile Number");
      }
    }
    if (!error) {
      var body = { mobileno: mobileno };
      var result = await postData("userdetails/chkuserbymobileno", body);
      if (result.result) {
        var temp=OtpGenerator.generate(4, {
            digits: true,
            alphabets: false,
            upperCase: false,
            specialChars: false,
          })
          alert(temp)
      
        setGOtp(temp)
        
        dispatch({
          type: "ADD_CLIENT",
          payload: [result.data.mobileno, result.data],
        });
        setStatus(true);
      } else {
        props.history.push({ pathname: "/signup" }, { mobileno: mobileno });
      }
    }
  };
  return (
    <div style={{ background: "#f5f6fa" }}>
      <Header />
      <container
        style={{
          border: "0.5px solid #fff",
          borderRadius: 20,
          display: "flex",
          marginTop: 30,
          marginLeft: 90,
          marginRight: 90,
          alignItems: "center",
          flexDirection: "column",
          background: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            width: "100%",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs="12" sm={6}>
              <div style={{ marginTop: 1, marginLeft: 10, paddingLeft: 40 }}>
                <img src={`${ServerURL}/images/shop1.jpg` } width='450' height='450' alt="FNF" />
              </div>
            </Grid>
            <Grid item xs="12" sm={6}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>Sign in</h2>
                <p>Sign in to access your Orders, Offers and Wishlist. </p>
                <div style={{ display: "flex" }}>
                  <TextField
                    id="standard-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    style={{ width: 400 }}
                    onChange={(event) => setMobileNo(event.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: 5,
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {msg}
                </div>
                <div style={{ width: 400, textAlign: "center", margin: 15 }}>
                  <IconButton
                    aria-label="right"
                    style={{ background: "#2e86de", color: "#FFF" }}
                    onClick={() => handleCheckUserMobileNumber()}
                  >
                    <KeyboardArrowRightIcon size="large" />
                  </IconButton>
                </div>
              </div>
              {status ? (
                <div style={{ padding: 5 }}>
                  <h4>Verify</h4>
                  <p>
                    We have sent 4 digit otp on <b>+91-{mobileno} Or OnConsole</b>
                  </p>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your OTP"
                    variant="outlined"
                    onChange={(event) => setOtp(event.target.value)}
                    style={{ width: 400 }}
                  />

                  <div style={{ width: 400, textAlign: "center", margin: 15 }}>
                    <IconButton
                      aria-label="right"
                      style={{ background: "#2e86de", color: "#FFF" }}
                      onClick={() => handleVerify()}
                    >
                      <KeyboardArrowRightIcon size="large" />
                    </IconButton>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </div>
      </container>
      <Footer />
    </div>
  );
}
