import MaterialTable from "material-table"
import React,{useState,useEffect} from "react"
import {getData} from "./FetchNodeService"

export default function DisplayOrdersDetails(props) {
        const [list,setList]=useState()
       
        const fetchAllOrders=async()=>{
            var result = await getData("orders/displayalldetails")
            setList(result)
            }
            
        useEffect(function(){
            fetchAllOrders()
        },[])    

        function displayAll() {
                return (
                <div>
                  <MaterialTable
                    title="Order History List"
                    columns={[
                      { title: 'Order Id', field: 'orderid' },
                      { title: 'Order Date', field: 'orderdate' },
                      { title: 'Order Time', field: 'ordertime' },
                      { title: 'Mobile No',field:'mobileno'},
                      { title: 'Email Id', field: 'emailid' },
                      { title: 'User Name', field: 'username' },
                      { title: 'Address One', field: 'address1' },
                      { title: 'Address Two', field: 'address2' },
                      { title: 'State', field: 'state' },
                      { title: 'City', field: 'city' },
                      { title: 'Mobile Id', field: 'mobileid' },
                      { title: 'Mobile Name', field: 'mobilename' },
                      { title: 'Mobile Price', field: 'price' },
                      { title: 'Offer Amount', field: 'offer' },
                      { title: 'Payment Mode', field: 'paymentmode' },
                      { title: 'Quantity Demand', field: 'qtydemand' },
                      { title: 'Total Amount', field: 'totalamount' },
                      { title: 'Delivery Status', field: 'deliverystatus' },
                      { title: 'Payment TransactionId', field: 'paymenttransactionid' }  

                    ]}
                    data={list}      
                    
                   />
                    
                 </div>
                );
              }
              return (
              <div style={{display:'flex',justifyContent:'center',alignContent:'center',alignItem:'center'}}>
                  <div style={{width:900,marginTop:40,padding:3}}>
                  {displayAll()}
                  </div>
                  </div>
              );
    
}
