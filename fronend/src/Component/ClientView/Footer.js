import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getData, ServerURL } from "../FetchNodeService";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import {
  LocalShipping,
  Smartphone,
  Devices,
} from "@material-ui/icons";

const Box = styled.div`
  padding: 20px 05px;
  background: #1e6b7b;
  position: absolute;
  width:99%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
  color: #fff;
`;

const ColumnCat = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
  color: #fff;
  width: 210px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  text-align: center;
  color: #fff;
  width: 400px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 80px;
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

const FooterData = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;

const Heading = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;

const useStyles = makeStyles((theme) => ({
  divider: {
    background: "#fff",
  },

  dividerBottom: {
    background: "#fff",
    marginTop: "40px",
  },
}));

const Footer = () => {
  const [listCategory, setListCategory] = useState([]);
  const classes = useStyles();

  const fetchAllCategory = async () => {
    let list = await getData("categories/displayall");
    setListCategory(list);
  };

  const showCategory = () => {
    return listCategory.map((item) => {
      return <FooterLink href="#">{item.categoryname}</FooterLink>;
    });
  };

  useEffect(function () {
    fetchAllCategory();
  }, []);

  return (
    <Box>
      <Container>
        <Row>
          <ColumnCat>
            <Heading>MOST POPULAR CATEGORIES</Heading>
            {showCategory()}
            <div
              style={{
                marginTop: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                textAlign: "left",
              }}
            >
              <Devices fontSize={"large"} style={{marginRight:8}}  />
              2500+ Mobiles
            </div>
          </ColumnCat>

          <Column>
            <Heading>CUSTOMER SERVICES</Heading>
            <FooterLink href="#">Terms & Condition</FooterLink>

            <div
              style={{
                marginTop: "110px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                textAlign: "left",
                width:175
              }}
            >
              <LocalShipping fontSize={"large"} style={{marginRight:8}} />
              FREE SHIPPING
            </div>
          </Column>

          <ColumnCat>
            <Heading>Visit</Heading>
            <FooterLink href="#">Home</FooterLink>
           
            <div
              style={{
                marginTop: "110px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                textAlign: "left",
              }}
            >
              <Smartphone fontSize={"large"} style={{marginRight:8}} />
              GENUINE PRODUCTS
            </div>
          </ColumnCat>

          <Column2>
            <Divider
              orientation={"vertical"}
              classes={{ root: classes.divider }}
            />
            <Column>
              <div style={{ marginTop: "10px" }}>
                <Heading>Contact Us</Heading>
                <FooterData>Call Us : 7982165765</FooterData>
              </div>
              <div style={{ marginTop: "10px" }}>
                <FooterData>Email : xxxxxx@gmail.com</FooterData>
              </div>
              <div style={{ marginTop: "30px", display: "flex" }}>
                <FooterData>
                Nature of information collected
                We may collect information that can identify you ("personal information"),
                such as your name and email address, your preferences, your phone numbers, 
                in case you happen to be owner of a brand or business when you (or other users)
                provide it to us when using our website or in some other manner. </FooterData>
              </div>
              <div style={{ textAlign: "center" }}>
                <Heading>Download APP</Heading>
                <FooterLink href="#" >
                  <img src={`/play_store.png`} alt={"Play_store"} style={{height: 30, margin:5}} />
                  <img src={`/ios_app_store_icon.png`} alt={"ios_store"} style={{height: 30,margin:5}} />
                </FooterLink>
              </div>
            </Column>
          </Column2>
        </Row>
      </Container>
      <Divider classes={{ root: classes.dividerBottom }} />

    </Box>
  );
};
export default Footer;
