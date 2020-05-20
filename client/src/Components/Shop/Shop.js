import React, { Component } from 'react'
import Page_Top from '../../utils/Page_Top'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProductBrands, getProductWoods } from '../../Redux/actions/product_action'
import CollapsCheckBox from '../../utils/CollapsCheckBox'
import {frets} from '../../utils/fixed_cat'

class Shop extends Component {


    state={
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }

    componentDidMount() {

        this.props.getProductBrands()
        this.props.getProductWoods()

    }

    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters

        this.setState({filters:newFilters})
    }

    render() {


        return (
            <div>
                <Page_Top title="Browse Products" />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="right">
                            <CollapsCheckBox
                                initState={true}
                                title="Brands"
                                list={this.props.products && this.props.products.brands && this.props.products.brands.data}
                                handleFilters={(filters) => this.handleFilters(filters, 'brand')}
                            />

                            <CollapsCheckBox
                                initState={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters) => this.handleFilters(filters, 'brand')}
                            />

                             <CollapsCheckBox
                                initState={false}
                                title="Wood"
                                list={this.props.products && this.props.products.woods && this.props.products.woods.data}
                                handleFilters={(filters) => this.handleFilters(filters, 'wood')}
                            />
                        </div>


                        <div className="left">
                            right
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProductBrands, getProductWoods }, dispatch);
}


function mapStateToProps({ products }) {
    return { products };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Shop));


