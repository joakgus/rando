import React, { Component } from "react"
import  axios  from 'axios';

import { API_URL } from './../shared/constants';
import { useNavigate } from 'react-router-dom';

class UserSignUp extends Component{

    //Add constructor to be able to use states in the application
    //Define properties to be used

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            userName:'',
            personalNumber:'',
            email:'',
            password:''
        }


        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePersonalNumberHandler=this.changePersonalNumberHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }


    

    //return metadata from target input fields and their values
    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value})
    }
    changeUserNameHandler=(event)=>{
        this.setState({userName: event.target.value})
    }
    changePersonalNumberHandler=(event)=>{
        this.setState({personalNumber: event.target.value})
    }

    changeEmailHandler =(event)=>{
        this.setState({email: event.target.value})
    }

    changePasswordHandler =(event)=>{
        this.setState({password: event.target.value})
    }

    //save the input values
    saveUser=(e)=>{
        e.preventDefault();
        let user ={firstname: this.state.firstName,lastName:this.state.lastName,username:this.state.userName,
            personalNumber:this.state.personalNumber, email: this.state.email, password: this.state.password};
        //this.props.createUser(user);
        //Store the user in the database
        // eccrypt password and save in the databasse

      /*   let encryptedPass = '';
        user.password = encryptedPass;
        console.log('User=>' + JSON.stringify(user)); */

        const  options = {
            headers: {
                'Content-Type': 'application/json',
            },
          }; 
        
        
        axios.post(API_URL+ "signup", user, options)
            .then(data => {
                console.log('Success user signup userId:', data.userId);
                this.props.navigate('/signin'); // redirect to the welcome page
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    //return react elements to the browser
    render(){
        return(

            <form onSubmit={this.saveUser}>


                <div>
                    <div className="container">
                        <div className="row">
                            <br></br>
                            <h1 className="text-center">User Registration</h1>
                            <br></br>
                            <div className=" card col-md-6 offset-md-3">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>first Name</label>
                                        <input placeholder="" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>last Name</label>
                                        <input placeholder="" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>username</label>
                                        <input placeholder="" name="username" className="form-control"
                                        value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>personal Number</label>
                                        <input placeholder="" name="number" className="form-control"
                                        value={this.state.personalNumber} onChange={this.changePersonalNumberHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>email</label>
                                        <input placeholder="" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input placeholder="" name="password" className="form-control" type="password"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>

                                    </div>
                                    <br></br>
                                    <br></br>

                                    <input className="btn btn-primary" type="submit" value="Submit"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

UserSignUp.defaultProps = {
    titl2: ""
}

//export default UserSignUp;


function WithNavigate(props) {
    let navigate = useNavigate();
    return <UserSignUp {...props} navigate={navigate} />
}

export default WithNavigate
