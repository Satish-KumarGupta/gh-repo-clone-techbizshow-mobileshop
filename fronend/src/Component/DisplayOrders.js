import MaterialTable from "material-table"
import React,{useState,useEffect} from "react"
import {getData} from "./FetchNodeService"

export default function DisplayOrders(props) {
        const [list,setList]=useState()
       
        const fetchAllOrders=async()=>{
            var result = await getData("orders/displayall")
            setList(result)
            }
            
        useEffect(function(){
            fetchAllOrders()
        },[])    

        function displayAll() {
                return (
                <div>
                  <MaterialTable
                    title="Order Generate List"
                    columns={[
                      { title: 'Order No', field: 'orderno' },
                      { title: 'Order Date', field: 'orderdate' },
                      { title: 'Order Time', field: 'ordertime' },
                      { title: 'Total Amount', field: 'totalamount' },
                      { title: 'Email Id', field: 'emailid' },
                      { title: 'Mobile No',field:'mobileno'},
                      { title: 'Payment Mode', field: 'paymentmode' },
                      { title: 'Transaction Id', field: 'transactionid'}
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
