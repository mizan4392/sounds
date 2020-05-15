import React, { Component } from 'react'
import Slider from 'react-slick'
import MyButton from '../../utils/MyButton'
class Home_Slider extends Component {
    state = {
        slides: [
            {
                img: '/images/featured/featured_home.jpg',
                lineOne: 'Fender',
                lineTwo: 'Custom shop',
                linkTitle: 'Shpo now',
                linkTo: '/shop',
            },
            {
                img: '/images/featured/featured_home_2.jpg',
                lineOne: 'B-Stock',
                lineTwo: 'Awesome discounts',
                linkTitle: 'View offers',
                linkTo: '/shop',
            },
        ],
        sliderSettings: {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
    }


    render() {

        const renderSliderElement = this.state.slides ? this.state.slides.map((item, i) => {

            return (<div key={i}>
                <div className="featured_image"
                    style={{
                        background: `url(${item.img})`,
                        height: `${window.innerHeight}px`
                    }}
                >
                    <div className="featured_action">
                        <div className="tag title">{item.lineOne}</div>
                        <div className="tag low_title">{item.lineTwo}</div>
                        <div>
                            <MyButton
                                type="default"
                                title={item.linkTitle}
                                linkTo={item.linkTo}
                                addStyle={{
                                    margin: '10px 0 0 0'
                                }}
                            >

                            </MyButton>
                        </div>
                    </div>

                </div>

            </div>)

        }) : (<div></div>)

        return (
            <div className="featured_container">
                <Slider {...this.state.sliderSettings}>
                    {renderSliderElement}
                </Slider>
            </div>
        )
    }
}

export default Home_Slider
