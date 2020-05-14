import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
        confirmPassword: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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
                                            error={this.state.password === this.state.confirmPassword ? false:true}
                                        />
                                    </Grid>

                                   
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                                    </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                            </Link>
                                    </Grid>
                                </Grid>
                            </form>


                        </Container>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Register)
