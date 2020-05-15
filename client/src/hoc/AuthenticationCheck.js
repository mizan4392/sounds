import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { userAuth } from '../Redux/actions/user_action'
import * as ROUTS from '../utils/Routs'


export default function (ComposeClass, reload, adminRoute = null) {

    class AuthenticationCheck extends Component {

        state = {
            loading: false
        }

        componentDidMount() {

            this.props.userAuth().then(res => {

                let user = res.payload
                

                if (!user.isAuth) {
                    if (reload) {
                        this.props.history.push(ROUTS.LOGIN)
                    }

                } else {
                    if (adminRoute && user.isAdmin) {

                        this.props.history.push(ROUTS.USER_DESHBOARD)

                    } else {
                        if (reload === false) {
                            this.props.history.push(ROUTS.USER_DESHBOARD)
                        }
                    }

                }

                this.setState({loading:false})
            })
        }


        render() {

            if (this.state.loading) {
                return (
                    <div className="main_loader">
                        <CircularProgress style={{ color: '#2196F3' }} thickness={7} />

                    </div>
                )
            }
            return (

                <div>
                    <ComposeClass {...this.props} user={this.props.user} />
                </div>
            )
        }
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ userAuth }, dispatch);
    }



    function mapStateToProps({ user }) {
        return {  user:user.userData };
    }



    return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck)
}


