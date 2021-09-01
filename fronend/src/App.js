import CategoryInterface from "./Component/CategoryInterface";
import DisplayAllCategory from './Component/DisplayAllCategory';
import AdminLogin from './Component/AdminLogin';
import AdminDashboard from "./Component/AdminDashboard";
import SubCategoryInterface from "./Component/SubCategoryInterface";
import DisplayAllSubCategories from "./Component/DisplayAllSubCategories";
import MobileInterface from "./Component/MobileInterface";
import DisplayMobiles from "./Component/DisplayMobiles";
import Header from "./Component/ClientView/Header";
import ConsoleList from "./Component/ClientView/ConsoleList";
import ProductView from "./Component/ClientView/ProductView";
import SignIn from "./Component/ClientView/SignIn";
import SignUp from "./Component/ClientView/SignUp";
import ShowCart from "./Component/ClientView/ShowCart";
import MakePayment from './Component/ClientView/MakePayment';
import PaymentGateway from './Component/ClientView/PaymentGateway';
import QtySpinner from "./Component/ClientView/QtySpinner";
import Home from "./Component/ClientView/Home";
import {BrowserRouter as Router,Route} from "react-router-dom"
import MobilePicture from './Component/MobilePicture';
import DisplayMobilePicture from "./Component/DisplayMobilePicture";
import View from "./Component/ClientView/View";
import CategoryView from './Component/ClientView/CategoryView';
import DisplayOrders from './Component/DisplayOrders';
import DisplayOrdersDetails from "./Component/DisplayOrdersDetails";

function App(props) {
  return (
    <div >
      <Router>
        <Route 
        strict
        exact
        component={CategoryInterface}
        path="/categoryinterface"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={DisplayAllCategory}
        path="/displayallcategory"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={AdminLogin}
        path="/adminlogin"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={AdminDashboard}
        path="/admindashboard"
        history={props.history}
        >
        </Route>

        <Route 
        strict
        exact
        component={SubCategoryInterface}
        path="/subcategoryinterface"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={DisplayAllSubCategories}
        path="/displayallsubcategories"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={MobileInterface}
        path="/mobileinterface"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={DisplayMobiles}
        path="/displaymobile"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={Header}
        path="/header"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={Home}
        path="/home"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={ConsoleList}
        path="/consolelist"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={QtySpinner}
        path="/qtyspinner"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={ProductView}
        path="/productview"
        history={props.history}
        >
        </Route>

        <Route 
        strict
        exact
        component={SignIn}
        path="/signin"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={SignUp}
        path="/signup"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={ShowCart}
        path="/showcart"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={MakePayment}
        path="/makepayment"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={View}
        path="/view"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={CategoryView}
        path="/categoryview"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={PaymentGateway}
        path="/paymentgateway"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={DisplayOrders}
        path="/displayorders"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={DisplayOrdersDetails}
        path="/displayordersdetails"
        history={props.history}
        >
        </Route>
        <Route 
        strict
        exact
        component={MobilePicture}
        path="/mobilepicture"
        history={props.history}
        >
        </Route>

        <Route 
        strict
        exact
        component={DisplayMobilePicture}
        path="/displaymobilepicture"
        history={props.history}
        >
        </Route>
        </Router>

    </div>
  );
}

export default App;
