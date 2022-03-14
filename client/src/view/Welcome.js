import React, { Component } from "react";
import UserService from "../model/UserService";
export default class Welcome extends Component {


    constructor(props) {
        super(props);
        this.state = {
            content: ""

        };
    }
    componentDidMount() {
        if (localStorage.user === undefined){
            UserService.getPublicContent().then(
                response => {
                    this.setState({
                        content: response.data
                    });
                },
                error => {
                    this.setState({
                        content:
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString()
                    });
                }
            );
        }
        else {
            UserService.getUserContent().then(
                response => {
                    this.setState({
                        content:response.data
                    });
                },
                error => {
                    this.setState({
                        content:
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString()
                    });
                }
            );
        }
    }
    render() {
        let page = null
        console.log(this.state.content);
        if (this.state.content.username !== undefined)
        {
            page =<header>
                <h3>{this.state.content.username}</h3>
                <h2>Welcome {JSON.parse(localStorage.getItem('user')).username}</h2>
            </header>
        }
        else
        {
           page = <h3>{this.state.content}</h3>
        }

        return (
            <div >
                {page}
            </div>

        );
    }
}
