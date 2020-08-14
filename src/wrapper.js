import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.min.css";
import { Route, Link,Switch } from "react-router-dom";
import { StockTable } from "./components/stocktable/stocktable";
import StockDetail from "./components/stocktable/stockdetail";

function Wrapper() {
  return (
    <div id="wrapper" data-testid="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">STOCK MARKET</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/stocktable">
            <i className="fas fa-fw fa-table"></i>
            <span>Stocks</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            Stocks
          </nav>
          <Switch>
            <Route path="/details/:id" component={StockDetail} />
           <Route path="/" component={StockTable} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
