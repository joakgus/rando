import React, { Component } from "react"

class UserSignUp extends Component{

    //Add constructor to be able to use states in the application
    //Define properties to be used

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            personalNumber:'',
            email:'',
            password:''
        }

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
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
        let user ={firstName: this.state.firstName,lastName:this.state.lastName,personalNumber:this.state.personalNumber, email: this.state.email, password: this.state.password};
        this.props.createUser(user)
        console.log('User=>' + JSON.stringify(user));
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
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>last Name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>personal Number</label>
                                        <input placeholder="Personal Number" name="number" className="form-control"
                                        value={this.state.personalNumber} onChange={this.changePersonalNumberHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>email</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input placeholder="Password" name="password" className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>

                                    </div>
                                    <br></br>
                                    <br></br>

                                    <input type="submit" value="Submit"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default UserSignUp;
