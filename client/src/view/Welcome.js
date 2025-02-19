import React, { Component } from "react";
import UserService from "../model/UserService";
import {Link, Route, Routes} from "react-router-dom"
import AdminPage from "./AdminPage";



export default class Welcome extends Component {

 constructor(props) {
        super(props);
        this.state = {
            content: "",
            userInfo:""
        };

        //const [userInfo, setUserInfo] = useState([]); 
       
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
            this.setState({
                userInfo: JSON.parse(localStorage.getItem('user'))
            });

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
            <>
            <div >
                <header>
                    {this.state.userInfo.role==1 &&
                            <>
                                <br></br>
                                <Link to="/admin">Admin Page</Link>
                            </>
                        
                           
                    }
                    
                    <h3>{this.state.content.username}</h3>
                    <h2>Welcome {JSON.parse(localStorage.getItem('user')).username}</h2>
                   
                </header>
              
            </div>
          </>
        );
    }
}
