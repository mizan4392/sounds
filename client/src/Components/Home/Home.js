import React, { Component } from 'react'
import Home_Slider from './Home_Slider'
import Home_Promotion from './Home_Promotion'

class Home extends Component {
    render() {
        return (
            <div>
                <Home_Slider />
                <Home_Promotion />
            </div>
        )
    }
}
export default Home
