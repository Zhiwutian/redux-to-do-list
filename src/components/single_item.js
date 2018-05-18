import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import {Link } from "react-router-dom";

class SingleItem extends Component {
    constructor(props){
        super(props);

        this.state = {

            timeCreated: "",
            timeCompleted: ""

        }



    }

    componentWillUnmount(){
        this.props.clearSingleItem();
    }

    componentDidMount(){
        console.log("Single Props:", this.props);
        this.props.getSingleItem(this.props.match.params.id);


    }

    async handleDeleteItem() {

        await this.props.deleteItem(this.props.match.params.id);
        this.props.history.push("/");

    }

    async handleToggleItem() {

        await this.props.toggleComplete(this.props.match.params.id);


    }

    formattedTime(ts) {


        var a = new Date(ts * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var timeCompleted = date + ' ' + month +  ' ' + hour + ':' + min + ':' + sec ;
        console.log(timeCompleted);


        return <span>{timeCompleted}</span>

    }

    render() {
        console.log(this.state);
        console.log("Single Props:", this.props);
        const {title, details, complete, completed, created} = this.props.item;

            if(!title) {
                <p>Loading...</p>
            }

            return (
                <div>
                    <h1 className="center">To Do Item</h1>
                    <div className="row center">
                        <Link to="/" className="btn blue-grey">View Full List</Link>
                    </div>
                    <h4 className="center">{title}</h4>
                    <p className="center">{details}</p>
                    <p className="center">{this.formattedTime(created)}</p>
                    <p className="center">{this.formattedTime(completed)}</p>
                    <p className="center">Item is {complete ? "completed" : "incomplete"}!</p>
                    <div className="center m3">
                        <button  className="center  btn red darken-3" onClick={this.handleDeleteItem.bind(this)}>Delete</button>
                        <button className={`btn ${complete ? "blue" : "green"}`} onClick={this.handleToggleItem.bind(this)}>{complete ? "Toggle incomplete" : "Toggle complete"}</button>
                    </div>
                </div>
            )


        // return (
        //     <div>
        //         <h1 className="center">To Do Item</h1>
        //         <div className="row center">
        //             <Link to="/" className="btn blue-grey">View Full List</Link>
        //         </div>
        //         <h4 className="center">{title}</h4>
        //         <p className="center">{details}</p>
        //         <p className="center">{this.formattedTime(created)}</p>
        //         <button onClick={this.handleDeleteItem.bind(this)}>Delete</button>
        //         <button onClick={this.handleToggleItem.bind(this)}>Complete</button>
        //     </div>
        // )
    }
}


// display time completed, time created, and if completed
// use javascript date object to read time stamp
//const time = new Date(time stamp)
// add two buttons
// one will toggle whether or not its complete by contacting the server, alter text to show completion
// one that deletes the item and sends the user back to the main list. must delete on server
// design urls so that when page is refreshed it stays where it is at

function mapStateToProps(state) {
    return {
        item: state.list.single
    }
}

export default connect( mapStateToProps, actions )(SingleItem);