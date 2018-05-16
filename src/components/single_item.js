import React, { Component } from "react";
import { connect } from "react-redux";
import {getSingleItem} from "../actions";
import {Link } from "react-router-dom";

class SingleItem extends Component {

    componentDidMount(){
        console.log("Single Props:", this.props);

        this.props.getSingleItem(this.props.match.params.id);
    }

    render() {
        console.log("Single Props:", this.props);
        const {title, details} = this.props.item;

        return (
            <div>
                <h1 className="center">To Do Item</h1>
                <div className="row center">
                    <Link to="/" className="btn blue-grey">View Full List</Link>
                </div>
                <h4 className="center">{title}</h4>
                <p className="center">{details}</p>
            </div>
        )
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

export default connect( mapStateToProps, { getSingleItem})(SingleItem);