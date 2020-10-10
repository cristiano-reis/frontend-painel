import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashborad from '../pages/Dashboard';


const AppRoutes: React.FC = () => (
    <Layout>
      <Switch>
        <Route path="/" component={Dashborad} />
      </Switch>
    </Layout>
);

export default AppRoutes;
