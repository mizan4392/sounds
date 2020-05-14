import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { registerUser } from '../../Redux/actions/user_action'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dialog } from '@material-ui/core';
import * as ROUTES from '../../utils/Routs'

const styles = theme => ({
    paper: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
})

class Register extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        sucess: false
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRegister = e => {
        e.preventDefault()
        if (this.state.password !== this.state.confirmPassword) {
            alert('password and Confirm Password Not Match')
        } else {
            if (this.state.name.length === 0 || this.state.lastname.length === 0) {
                alert('Must Enter Name And LastName')
            } else {

                let data = {
                    name: this.state.name,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    password: this.state.password,
                }

                this.props.registerUser(data).then(res => {

                    console.log(res.payload)
                    if (res.payload.success) {
                        this.setState({ sucess: true })
                        setTimeout(() => {
                            this.props.history.push(ROUTES.LOGIN)
                        }, 3000)

                    }
                })
            }
        }
    }
    render() {

        console.log(this.state)

        const { classes } = this.props
        return (
            <div className="page_wraper">
                <div className="container">
                    <div className="register_login_container">
                        <Container component="main" maxWidth="xs">
                            <form className={classes.form} noValidate>
                                <h2>Personal Information</h2>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="name"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            autoFocus
                                            placeholder="Enter Your Name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastname"
                                            label="Last Name"
                                            name="lastname"
                                            autoComplete="lname"
                                            placeholder="Enter Your LastName"
                                            value={this.state.lastname}
                                            onChange={this.handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            placeholder="Enter Your Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            placeholder="Enter Your Password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            placeholder="Confirm Password"
                                            value={this.state.confirmPassword}
                                            onChange={this.handleInputChange}
                                            error={this.state.password === this.state.confirmPassword ? false : true}
                                        />
                                    </Grid>


                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.handleRegister}
                                >
                                    Sign Up
                                    </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <p onClick={()=>{
                                            this.props.history.push(ROUTES.LOGIN)
                                        }} style={{color:'blue',textDecoration:'underline',cursor:'pointer',width:'100%'}}>
                                            Already have an account? Sign in
                                           </p>
                                    </Grid>
                                </Grid>
                            </form>
                        </Container>
                    </div>
                </div>

                <Dialog open={this.state.sucess}>
                    <div className="dialog_alert">
                        <div>Congratulation !!</div>
                        <div>
                            Register Sucessful You Will Be Redirected to Login!
                        </div>

                    </div>

                </Dialog>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ registerUser }, dispatch);
}



function mapStateToProps({ }) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Register)));


