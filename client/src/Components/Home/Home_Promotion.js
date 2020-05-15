import React, { Component } from 'react'
import MyButton from '../../utils/MyButton'
class Home_Promotion extends Component {
    state = {
        promotion:
        {
            img: '/images/featured/featured_home_3.jpg',
            lineOne: 'UP to 40% off',
            lineTwo: 'In SecondHand guitars',
            linkTitle: 'shpo naw',
            linkTo: '/shop',
        },

    }
    render() {

        const renderPromotion = this.state.promotion ? (
            <div className="home_promotion_img"
                style={{
                    background: `url(${this.state.promotion.img})`
                }}
            >

                <div className="tag title">{this.state.promotion.lineOne}</div>
                <div className="tag low_title">{this.state.promotion.lineTwo}</div>
                <div>
                    <MyButton
                        type="default"
                        title={this.state.promotion.linkTitle}
                        linkTo={this.state.promotion.linkTo}
                        addStyle={{
                            margin: '10px 0 0 0'
                        }}
                    >

                    </MyButton>
                </div>

            </div>
        ) : (<div></div>)

        return (
            <div className="home_promotion">
                {renderPromotion}
            </div>
        )
    }
}

export default Home_Promotion
