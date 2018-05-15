import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import List from "./list";
import AddItem from "./add_item";
import  { Route } from "react-router-dom";

const App = () => (
    <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add-item" component={AddItem}/>
    </div>
);

export default App;
