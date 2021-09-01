import React, { useEffect, useState, createRef } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ServerURL, postData } from "../FetchNodeService";
import Header from "./Header";
import Footer from "./Footer";
import QtySpinner from "./QtySpinner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import "react-tabs/style/react-tabs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function ProductView1(props) {
  var consoleSlider = createRef();
  const classes = useStyles();
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2000,
  };

  var item = props.history.location.state.product;
   
  const [consolePictures, setConsolePictures] = useState([]);
  const [getImage, setImage] = useState(item.icon);
  const [pageRender, setPageRender] = useState(false);
  
  var dispatch = useDispatch();
  var cart = useSelector((state) => state.cart);
  
const fetchmobilePictures = async () => {
    var body = { mobileid: item.mobileid };
    
    var result = await postData(
      "mobilepicture/displayallmobilepictures",
      body
    )
    setConsolePictures(result);
  };

  useEffect(function(){
    fetchmobilePictures()
  })

//////////////////Tabs///////////////////////
const showTabs = (Description) => (
    <Tabs style={{ padding: 20 }}>
      <TabList>
        <Tab
          style={{
            fontWeight: "bold",
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          Description
        </Tab>
        <Tab style={{ fontWeight: "bold", fontSize: 20, letterSpacing: 1 }}>
          Terms & Condition
         </Tab>
        <Tab style={{ fontWeight: "bold", fontSize: 20, letterSpacing: 1 }}>
          Documents
        </Tab>
      </TabList>

      <TabPanel>
        <h2>{Description}</h2>
      </TabPanel>
      <TabPanel>
          <h2>7 Days for Return Product</h2>
        </TabPanel>
      </Tabs>
  );

  const handleQtyChange = (value, item) => {
    if (value === 0) {
      dispatch({ type: "REMOVE_CART", payload: [item.subcategoryid] });
    } else {
      item["qtydemand"] = value;

      dispatch({ type: "ADD_CART", payload: [item.subcategoryid, item] });
    }
    setPageRender(!pageRender);
  };

  const productDetails = () => {
    var v = cart[item.subcategoryid] || 0;
    var qty = 0;
    if (v !== 0) {
      qty = cart[item.subcategoryid].qtydemand;
    }
    return (
        <div>
          <div
            style={{
              padding: 10,
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
                {item.mobilename.length <= 20
                  ? item.mobilename.toUpperCase()
                  : item.mobilename.toUpperCase().substring(0, 18) + ".."}     
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="price_tag" style={{ padding:10 }}>
                        {item.offer > 0 ? (
                        <div>
                          <span>Deal Price:</span>{" "}
                            <span>&#8377;</span>
                            {item.price-item.offer}
                        </div>
                        ) : (
                        <div style={{}}>
                          <span>Deal Price:</span>{" "}
                            <span>&#8377;</span>
                            {item.price}
                        </div>
                        )}
                    </div>        
                    <div className="discount_price" style={{ padding: 10 }}>
                        <span style={{ marginRight: 2 }}>
                          MRP: &#8377;</span>
                        <span style={{'text-decoration': 'line-through'}}>{item.price}</span>
                    </div>
                   </div> 
            <div>
            {item.offer > 0 ? (
              <div
                style={{
                  fontSize:'1rem',
                  fontWeight:600,
                  padding: 10,
                  color: "green",
                }}
              >
                You Save <span>&#8377;</span>{" "}
                { item.offer}{" "}
                <span
                  style={{ color: "#000", fontWeight: 400, paddingLeft: 5,fontSize:'1rem' }}
                >
                  Inclusive of all taxes{" "}
                </span>
              </div>
            ) : (
              <></>
            )}
                    <div className="card_ratings" style={{ padding: 5 }}>
                        <span className="rate_number">4.1/5</span>
                        <img
                        src={`${ServerURL}/images/star.png`}
                        alt="FNF"
                        width="16"
                        height="16"
                        /> Ratings
                    </div>

                    <img
                        src={`${ServerURL}/images/warenty.jpg`}
                        alt="FNF"
                        width="150"
                         style={{width: 100,height: 100,padding:10 }}
                     />
                    </div>
                    {item.stock >= 1 && item.stock <= 3 ? (
                    <div
                        style={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        padding: 10,
                        color: "orange",
                        }}
                    >
                        Hurry Only {item.stock} Quantity left
                    </div>
                    ) : item.stock >= 4 ? (
                    <div
                        style={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        padding: 10,
                        color: "green",
                        }}
                    >
                        Stock Avalaible
                    </div>
                    ) : (
                    <div
                        style={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        padding: 10,
                        color: "red",
                        }}
                    >
                        Out of Stock
                    </div>
                    )}
                  <div style={{ fontSize: '1rem', fontWeight: 500, padding: 10 }}>
                  <span style={{ fontWeight: 200 }}>Inaugural Offer</span>{" "}
                   Free Shipping
                  </div>
                    {item.stock >= 1 ? (
                    <div style={{ margin: 20 }}>
                    <QtySpinner
                        value={qty}
                      onChange={(value) => handleQtyChange(value, item)}
                    />
                    </div>
                ) : (
                    <></>
                )}
                </div>
        
      );
    };
    const showConsolePictures = () => {
        return consolePictures.map(function (citem,index) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outline: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  outline: "none",
                  width: 70,
                  height: 70,
                  border: "2px solid #dcdde1",
                  borderRadius: 5,
                  margin: 2,
                  cursor: "pointer",
                }}
                onMouseEnter={() => setImage(citem.image)}
              >
                <img
                  src={`${ServerURL}/images/${citem.image}`}
                  alt="FNF"
                  width={56}
                  height={56}
                />
              </div>
            </div>
          );
        });
      };
      const handleNext = () => {
        consoleSlider.current.slickNext();
      };
    
      const handleBack = () => {
        consoleSlider.current.slickPrev();
      };
    
      return (
        <div>
          <Header history={props.history} />
          <div style={{ padding: 20 }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div
                  style={{
                    padding: 15,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`${ServerURL}/images/${getImage}`}
                    alt="FNF"
                    width="300"
                    height="300"
                  />
                </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginLeft: 10, fontSize: "small" }}>
                      <ArrowBackIosIcon onClick={() => handleBack()} />
                    </div>
                    <div
                      style={{
                        padding: "30px 10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <div style={{ width: 325 }}>
                        <Slider {...settings} ref={consoleSlider}>
                          {showConsolePictures()}
                        </Slider>
                      </div>
                    </div>
                    <div style={{ marginRight: 10, fontSize: "small" }}>
                      <ArrowForwardIosIcon onClick={() => handleNext()} />
                    </div>
                  </div>
              </Grid>

              <Grid item xs={6}>
                {productDetails()}
              </Grid>
            </Grid>
            <div>{showTabs(item.description)}</div>
            <Footer />
          </div>
        </div>
      );
    
}