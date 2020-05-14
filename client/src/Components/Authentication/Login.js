import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core'

class Login extends Component {

    state={
        email:'',
        password:''
    }

    handleInputChange = e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleLogin =e=>{

    }
    render() {
        return (
            <div style={{display:'flex',flexDirection:"column"}}>

                <TextField type="email" name="email" value={this.state.email} placeholder="Enter Your Email"  id="outlined-basic" label="Email" size='medium' onChange={this.handleInputChange} /><br></br>
                <TextField type="password" name="password" value={this.state.password} placeholder="Enter Your Password"  id="outlined-basic" label="Password" size='medium' onChange={this.handleInputChange} />
                <Button style={{background:'#d1c9c9',marginTop:"5px"}} onClick={this.handleLogin}> Login </Button>
            </div>
        )
    }
}

export default Login