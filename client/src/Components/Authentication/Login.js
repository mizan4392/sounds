import React from 'react'
import MyButton from '../../utils/MyButton'

function Login() {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customer</h1>
                        <p>some text</p>
                        <MyButton
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>

                    <div className="right">
                        <h2>Already Have An Account?</h2>
                        Login

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
