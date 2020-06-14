import React, { Component } from 'react'
import {Nav } from 'react-bootstrap';


export default class Sidebar extends Component {

    render() {
        return (
            <div style={{padding:"30px", backgroundColor: "#DAE9A6"}}>
                <Nav defaultActiveKey="/home" className="flex-sm-column" >
                    <Nav.Link href="/createArticle">New Article</Nav.Link>
                    <Nav.Link href="/accounts"> Manage Users</Nav.Link>
                    <Nav.Link href="/home">Manage Articles</Nav.Link>
                    <Nav.Link href="/forum">Manage Posts</Nav.Link>
                </Nav>
            </div>
        )
    }
}