import React, { Component } from 'react'
import * as ROUTE from '../../utils/Routs'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../../Redux/actions/user_action'
import { bindActionCreators } from 'redux'

class Header extends Component {

    state = {
        page: [
            {
                name: 'Home',
                linkTo: ROUTE.ROOT,
                public: true
            },
            {
                name: 'Guitars',
                linkTo: ROUTE.SHOP,
                public: true

            }
        ],
        user: [
            {
                name: 'My Cart',
                linkTo: ROUTE.CART,
                public: false
            },
            {
                name: 'My Account',
                linkTo: ROUTE.USER_DESHBOARD,
                public: false
            },
            {
                name: 'Log in',
                linkTo: ROUTE.LOGIN,
                public: true
            },
            {
                name: 'Log out',
                linkTo: ROUTE.LOGIN,
                public: false
            },

        ]
    }


    showLinks = type => {

        let list = [];
        let user = this.props.user.userData
        if (this.props.user) {
            type.forEach(item => {
                if (!(user && user.isAuth)) {
                    if (item.public) {
                        list.push(item)
                    }
                } else {
                    if (item.name !== 'Log in') {
                        list.push(item)
                    }
                }
            });

        }

        return list.map((item, i) => {
            if (item.name !== 'My Cart') {
                return this.defaultlink(item, i)
            } else {
                return this.cartlink(item, i)
            }

        })

    }

    cartlink = (item, i) => {
        let user = this.props.user.userData
        return (
            <div className="cart_link" key={i}>
                <span>{user && user.cart ? user.cart.length : 0}</span>
                <Link to={item.linkTo}>{item.name}</Link>
            </div>
        )
    }

    defaultlink = (item, i) => {
        if (item.name === 'Log out') {

            return (
                <div className="log_out_link"
                    key={i}
                    onClick={this.handleLogout}
                >
                    log out
                </div>
            )

        } else {
            return (<Link to={item.linkTo} key={i}>{item.name}</Link>)
        }

    }

    handleLogout = e => {
        e.preventDefault()

        this.props.logOutUser().then(res=>{
            if(res.payload.success){
                this.props.history.push(ROUTE.LOGIN)
            }
        })

    }


    render() {
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            SOUNDS
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            {this.showLinks(this.state.user)}
                        </div>
                        <div className="bottom">
                            {this.showLinks(this.state.page)}
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logOutUser }, dispatch);
}

function mapStateToProps(user) {
    return {
        user: user.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))