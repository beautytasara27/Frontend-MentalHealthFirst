/* eslint-disable */
import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import './styler.css'
export default class Contact extends Component {


    render() {
        //col-lg-6 col-md-6  col-sm-12 col-xs-12 col-xl-6 "
        return (

            <Jumbotron className="row justify-content-center" style={{ backgroundColor: "white", position: "center", paddingBottom: '200px', paddingTop: "10px" }}>
                <div className=" col-lg-8 col-md-12  col-sm-12 col-xs-12 col-xl-6 " >
                    <p className=" text-center text" style={{ padding: '30px' }}  >You can use this form to contact us about anything or to provide feedback and suggestions.

                    If you are looking for support, please post on our our forum instead!</p>
               
                <div className="container" style={{ backgroundColor: '#91BB7F', position: "center", zIndex: 1, padding: '60px' }}>
                    <h2 style={{ padding: '20px' }} className="text-center display-4 texty">Contact Us</h2>
                    <form method="POST" data-netlify="true" id="contact-form" name="contact">
                        <div className="  form-group border-bottom  border-dark">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="form-control" style={{ background: 'none', border: "none" }} />
                        </div>
                        <div className=" form-group border-bottom border-dark">
                            <label htmlFor="message">Message</label>
                            <input type="text" name="message" id="message" style={{ background: 'none', border: "none" }} className="form-control" rows="2"></input>
                        </div>
                        <button type="submit" className="btn btn-green-moon">Submit</button>
                    </form>
                </div>
                </div>

            </Jumbotron >

        )
    }
}