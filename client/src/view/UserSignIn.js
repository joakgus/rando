import React, { Component } from "react"
import UserGetter from "../model/UserGetter";

class UserSignIn extends Component {

    //Add constructor to be able to use states in the application
    //Define properties to be used

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeUsernameHandler=this.changeUsernameHandler.bind(this);
        this.login = this.login.bind(this);
    }

    //return metadata from target input fields and their values

    changeUsernameHandler =(event)=>{
        this.setState({username: event.target.value})
    }

    changePasswordHandler =(event)=> {
        this.setState({password: event.target.value})
    }

    //save the input values
    login(e){
        e.preventDefault();

        UserGetter.login(this.state.username, this.state.password).then(
            () => {
                alert("success" + localStorage.getItem("user"));
                //Store the user info in the database
                /*this.props.history.push("/profile");
                window.location.reload();*/
            }
            );
        //let user ={email: this.state.email, password: this.state.password};
        //console.log('User=>' + JSON.stringify(user));
    }


    //return react elements to the browser
    render(){
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <br></br>
                            <h1 className="text-center">User Sign In</h1>
                            <br></br>
                            <div className=" card col-md-6 offset-md-3">
                                <div className="card-body">
                                    <form onSubmit={this.login}>

                                        <div className="form-group">
                                            <label>Username</label>
                                            <input placeholder="Username" name="text" className="form-control"
                                                   value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input placeholder="Password" name="password" className="form-control"
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
    }

export default UserSignIn;
