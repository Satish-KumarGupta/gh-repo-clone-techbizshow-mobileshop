import React, { useEffect, useState,createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { getData, ServerURL } from "../FetchNodeService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  paperstyle: {
    justifyContent: "flex-start",
    display: "flex",
    padding: 10,
    width: 220,
    height: 300,
    margin: 10,
    borderRadius: 10,
    flexDirection: "column",
  },
  imageview: {
    width:200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 2,
    cursor: "pointer",

    "&:hover": {
      transform: "scale(1.25)",
      tansition: "all 0.5s ease 0s",
    },
  },
  arrowstyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Home(props) {
  var consoleSlider=createRef()
  const classes = useStyles();
  const [listCategory, setListCategories] = useState([]);
  const [listSubOffers, setSubOffers] = useState([]);
  const [listSubOffers1, setSubOffers1] = useState([]);
  const [listMobiles, setListMobiles] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  var itemsettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const fetchAllCategories = async () => {
    var list = await getData("categories/displayall");

    setListCategories(list);
    //alert(JSON.stringify(list))
  };

  const fetchAllSubcategoryOffers = async () => {
    var list = await getData("subcategory/subcategoryoffers");

    setSubOffers(list);
    //alert(JSON.stringify(list))
  };
  const fetchAllSubcategoryOffers1 = async () => {
    var list = await getData("subcategory/subcategoryoffers1");

    setSubOffers1(list);
    //alert(JSON.stringify(list))
  };

  const fetchMobilesOffers = async () => {
    var list = await getData("product/mobileoffers");

    setListMobiles(list);
    //alert(JSON.stringify(list))
  };

  
  const showSlider = () => {
    return listCategory.map((item) => {
      return (
        <div>
          <img src={`${ServerURL}/images/${item.ad}`} alt="FNF" width="100%" />
        </div>
      );
    });
   
  };

  const handleConsoleList=(categoryid)=>{

   props.history.push({'pathname':'/consolelist'},{'categoryid':categoryid})
  // props.history.push({'pathname':'/categoryview'})   
  
  }
 //////////////////////////////
  const handleNext=()=>{
    consoleSlider.current.slickNext()
  }

  const handleBack=()=>{
    consoleSlider.current.slickPrev();
  }

/////////////////////////////////
  const handleConsoleList1=(subcategoryid)=>{

    props.history.push({'pathname':'/categoryview'},{'subcategoryid':subcategoryid})
   // props.history.push({'pathname':'/categoryview'})   
   
   }
  


  const showCategories = () => {
    return listCategory.map((item) => {
      return (
        <div
          style={{
            border: "1px solid #ecf0f1",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            margin: 5,
          }}
          onClick={()=>handleConsoleList(item.categoryid)}
        >
          <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width="50%" />
          <div style={{ fontSize:'2rem', fontWeight:400, padding: 10,'text-align':'center' }}>
            {item.categoryname.toUpperCase()}
          </div>
        </div>
      );
    });
  };

  const showOffers = () => {
    return listSubOffers.map((item) => {
      return (
        <div>
          <div
            style={{
              //border: "1px solid #ecf0f1",
              width: 200,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 10,
              margin: 5,
            }}
            onClick={()=>handleConsoleList1(item.subcategoryid)}
      >
            <Paper elevation={3} className={classes.paperstyle}>
              <div className={classes.imageview}>
                <img src={`${ServerURL}/images/${item.icon}`}alt="FNF"  width='auto' height='160px' />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: "300", padding: 10,'textAlign':'center' }}>
                {item.subcategoryname.length <= 20
                  ? item.subcategoryname.toUpperCase()
                  : item.subcategoryname.toUpperCase().substring(0, 18) + ".."}
              </div>
         {/*     <div style={{ fontSize: 16, padding: 10 }}>
                Price<s>&#8377;{item.price}</s>{" "}
                <span>
                  <b>&#8377; {item.price-item.offer}</b>
                </span>
              </div>
              <div style={{ fontSize: 16, padding: 10 }}>
                <span style={{ color: "green" }}>
                  <b>You save </b>
                </span>
                <b>&#8377; {item.offer}</b>
              </div>
          */}  </Paper>
          </div>
        </div>
      );
    });
  };

  const showOffers1 = () => {
    return listSubOffers1.map((item) => {
      return (
        <div>
          <div
            style={{
              //border: "1px solid #ecf0f1",
              width: 200,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              padding: 10,
              margin: 5,
            }}
            onClick={()=>handleConsoleList1(item.subcategoryid)}
      >
            <Paper elevation={0} className={classes.paperstyle}>
              <div className={classes.imageview}>
                <img src={`${ServerURL}/images/${item.icon}`} alt="FNF" width='auto' height='130px' />
              </div>
              <div style={{ fontSize:'2rem', fontWeight: "bold", padding: 10, textAlign:'center' }}>
                {item.subcategoryname.length <= 20
                  ? item.subcategoryname.toUpperCase()
                  : item.subcategoryname.toUpperCase().substring(0, 18) + ".."}
              </div>
            </Paper>
          </div>
        </div>
      );
    });
  };

  const showMobilesOffers = () => {
    return listMobiles.map((item) => {
      return (
        <div
          style={{
           // border: "1px solid #ecf0f1",
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            margin: 5,
          }}
        >
          <Paper elevation={3} className={classes.paperstyle}>
              <div className={classes.imageview}>
                <img src={`${ServerURL}/images/${item.icon}`}alt="FNF" width="auto" height="150" />
              </div>
           
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: "bold", padding: 10 }}>
              {item.mobilename.length <= 20
              ?item.mobilename.toUpperCase()
              :item.mobilename.toUpperCase().substring(0,18)+".."
             }
            </div>
            <div style={{ fontSize: 16, padding: 10 }}>
              Price:Price<s>&#8377;{item.price}</s>{" "}
              <span>
                <b>&#8377; {item.price-item.offer}</b>
              </span>
            </div>
            <div style={{ fontSize: 16, padding: 10 }}>
              <span style={{ color: "green" }}>
                <b>You save </b>
              </span>
              <b>&#8377; { item.offer}</b>
            </div>
          </div>
          </Paper>
        </div>
      );
    });
  };



  useEffect(function () {
    fetchAllCategories();
    fetchAllSubcategoryOffers();
    fetchAllSubcategoryOffers1();
    fetchMobilesOffers();

  }, []);

  return (
    <div>
      <Header history={props.history} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <Slider {...settings}>{showSlider()}</Slider>
        </div>
      </div>

      <div className={classes.root}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              color: "#636e72",
              fontWeight: "normal",
              display: "flex",
              letterSpacing: "3.9px",
              fontFamily: 'Georgia,Times,"Times New Roman",serif',
              justifyContent: "center",
              padding: 10,
            }}
          >
            TOP CATEGORIES
          </div>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />

          <div style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            {showCategories()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              color: "#636e72",
              fontWeight: "normal",
              display: "flex",
              letterSpacing: "3.9px",
              fontFamily: 'Georgia,Times,"Times New Roman",serif',
              justifyContent: "center",
              padding: 10,
            }}
          >
            TOP OFFERS CONSOLE
          </div>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              className={classes.arrowstyle}
              style={{
                background: "#1e6b7b",
                position: "absolute",
                zIndex: 1,
                left: 5,
                opacity: 0.8,
              }}
            >
              <ArrowBackIosIcon style={{ color: "#FFF", fontSize: "large" }} />
            </IconButton>
            <div style={{ width: "98%" }}>
             <Slider {...itemsettings}> {showOffers()}</Slider>
            </div>
            <IconButton
              className={classes.arrowstyle}
              style={{
                background: "#1e6b7b",
                position: "absolute",
                zIndex: 1,
                right: 5,
                opacity: 0.8,
              }}
            >
              <ArrowForwardIosIcon
                style={{ color: "#FFF", fontSize: "large" }}
              />
            </IconButton>
          </div>

         
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              color: "#636e72",
              fontWeight: "normal",
              display: "flex",
              letterSpacing: "3.9px",
              fontFamily: 'Georgia,Times,"Times New Roman",serif',
              justifyContent: "center",
              padding: 10,
            }}
          >
            TOP OFFERS CONSOLE
          </div>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              className={classes.arrowstyle}
              style={{
                background: "#1e6b7b",
                position: "absolute",
                zIndex: 1,
                left: 5,
                opacity: 0.8,
              }}
            >
              <ArrowBackIosIcon onClick={()=>handleBack()}
               style={{ color: "#FFF", fontSize: "large" }} />
            </IconButton>
            <div style={{ width: "98%" }}>
              <Slider {...itemsettings} ref={consoleSlider}> {showOffers1()}</Slider>
            </div>
            <IconButton
              className={classes.arrowstyle}
              style={{
                background: "#1e6b7b",
                position: "absolute",
                zIndex: 1,
                right: 5,
                opacity: 0.8,
              }}
            >
              <ArrowForwardIosIcon onClick={()=>handleNext()}
                style={{ color: "#FFF", fontSize: "large" }}
              />
            </IconButton>
          </div>

         
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              color: "#636e72",
              fontWeight: "normal",
              display: "flex",
              letterSpacing: "3.9px",
              fontFamily: 'Georgia,Times,"Times New Roman",serif',
              justifyContent: "center",
              padding: 10,
            }}
          >
            TOP OFFERS MOBILE
          </div>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />
          
          
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              className={classes.arrowstyle}
              style={{
                background: "#1e6b7b",
                position: "absolute",
                zIndex: 1,
                left: 5,
                opacity: 0.8,
              }}
            >
              <ArrowBackIosIcon style={{ color: "#FFF", fontSize: "large" }} />
            </IconButton>
          
            <div style={{ width: "98%" }}>
              <Slider {...itemsettings}> {showMobilesOffers()}</Slider>
            </div>
           
           
            <IconButton
              className={classes.arrowstyle}
              style={{
                background: "#1e6b7b",
                position: "absolute",
                zIndex: 1,
                right: 5,
                opacity: 0.8,
              }}
            >
              <ArrowForwardIosIcon
                style={{ color: "#FFF", fontSize: "large" }}
              />
            </IconButton>
          </div>
        </div>
        
      </div>
     <Footer />
    </div>
  );
}
