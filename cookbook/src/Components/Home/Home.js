import React, { Component } from "react";
import { Route } from "react-router-dom";

import auth from "../../Auth/Auth.js";
import Header from "../SubComponents/Header";
import Create from "./SubPages/Create";
import Recipes from "./SubPages/Recipes";
import Calendar from "./SubPages/Calendar";
import GroceryList from "./SubPages/GroceryList";
import Settings from "./SubPages/Settings";
import Billing from "./SubPages/Billing";
import RecipeView from "./SubPages/RecipeView";

class Home extends Component {
  componentDidMount() {
    if (!auth.isAuthenticated()) this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <Route path="/home/create" component={Create} />
            <Route path="/home/recipes" component={Recipes} />
            <Route path="/home/calendar" component={Calendar} />
            <Route path="/home/dashboard" component={GroceryList} />
            <Route path="/home/settings" component={Settings} />
            <Route path="/home/billing" component={Billing} />
            <Route path="/home/recipe/" component={RecipeView} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
