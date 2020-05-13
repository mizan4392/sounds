import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faCompass,faPhone,faClock,faEnvelope} from '@fortawesome/fontawesome-free-solid'

class Footer extends Component {
    render() {
        return (
            <footer className="bck_b_dark">
                <div className="container">
                    <div className="logo">
                        Sounds
                    </div>
                    <div className="wrapper">
                        <div className="right">
                            <h2>Contact Information</h2>
                            <div className="business_nfo">
                                <div className="tag">
                                    <FontAwesomeIcon icon={faCompass} className="icon"/>
                                    <div className="nfo">
                                        <div>Address</div>
                                        <div>57/Ka</div>
                                    </div>
                                </div>

                                <div className="tag">
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    <div className="nfo">
                                        <div>Phone</div>
                                        <div>01830791133</div>
                                    </div>
                                </div>

                                <div className="tag">
                                    <FontAwesomeIcon icon={faClock} className="icon"/>
                                    <div className="nfo">
                                        <div>Working houre</div>
                                        <div>10:00am-6:00pm</div>
                                    </div>
                                </div>

                                <div className="tag">
                                    <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                    <div className="nfo">
                                        <div>Email</div>
                                        <div>dev.mizan4392@gmail.com</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="left">
                            <h2>Be The First One To Know</h2>
                            <div>
                                <div>
                                    some text
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
        )
    }
}
export default Footer
