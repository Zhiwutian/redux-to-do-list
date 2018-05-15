import React, { Component } from "react";

class SingleItem extends Component {

    componentDidMount(){
        console.log("Single Props:", this.props)
    }

    render() {
        return (
            <div>
                <h1 className="center">All the single itens!</h1>
            </div>
        )
    }
}

export default SingleItem;