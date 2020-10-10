import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
//import Dashborad from '../pages/Dashboard';
import Product from '../pages/Product';
import Slide from '../pages/Slide';


const AppRoutes: React.FC = () => (
    <Layout>
      <Switch>
        <Route exact path="/" component ={Slide} />
        <Route path="/product" component={Product} />
      </Switch>
    </Layout>
);

export default AppRoutes;
