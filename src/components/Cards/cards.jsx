
import React, { Component } from 'react'
import Card from "./CardUI"
import img from "../images/coming_soon_img.jpg"

class cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img} title="heading"/>
                </div>
                <div className="col-md-4">
                <Card imgsrc={img} title="heading"/>
                </div>
                <div className="col-md-4">
                <Card imgsrc={img} title="heading"/>
                </div>
                </div>
            </div>
        )
    }
}

export default cards
