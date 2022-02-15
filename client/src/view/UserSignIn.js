import React, { Component } from "react"
import {UserGetter} from "../model/UserGetter";

class UserSignIn extends Component {

    //Add constructor to be able to use states in the application
    //Define properties to be used

    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }

        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.login = this.login.bind(this);
    }

    //return metadata from target input fields and their values

    changeEmailHandler =(event)=>{
        this.setState({email: event.target.value})
    }

    changePasswordHandler =(event)=> {
        this.setState({password: event.target.value})
    }

    //save the input values
    login=(e)=>{
        e.preventDefault();

        this.setState(this.props.userModel.getUser(this.state.email, this.state.password))

        //let user ={email: this.state.email, password: this.state.password};
        //console.log('User=>' + JSON.stringify(user));
    }


    //return react elements to the browser
    render(){
        if (this.props.userModel.user.personalNumber == null) {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <br></br>
                            <h1 className="text-center">User Sign In {this.props.userModel.user.firstName}</h1>
                            <br></br>
                            <div className=" card col-md-6 offset-md-3">
                                <div className="card-body">
                                    <form onSubmit={this.login}>

                                        <div className="form-group">
                                            <label>email</label>
                                            <input placeholder="Email" name="email" className="form-control"
                                                   value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>password</label>
                                            <input placeholder="password" name="password" className="form-control"
                                                   value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <br></br>
                                        <br></br>

                                        <input type="submit" value="Submit"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else
        {
            return(<p>hi</p>)
        }
    }
}

export default UserSignIn;
