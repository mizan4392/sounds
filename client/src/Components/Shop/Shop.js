import React, { Component } from 'react'
import Page_Top from '../../utils/Page_Top'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getProductBrands,getProductWoods} from '../../Redux/actions/product_action'
import CollapsCheckBox from '../../utils/CollapsCheckBox'


class Shop extends Component {

    componentDidMount(){

        this.props.getProductBrands()
        this.props.getProductWoods()

    }

    handleFilters = filters =>{

    }

    render() {


        return (
            <div>
                <Page_Top title="Browse Products" />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapsCheckBox
                                initState={true}
                                title="Brands"
                                list={this.props.products && this.props.products.brands && this.props.products.brands.data}
                                handleFilters = {(filters)=>this.handleFilters(filters,'brand')}
                                />
                        </div>


                        <div className="rigth">
                            right
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({  getProductBrands,getProductWoods}, dispatch);
}

  
function mapStateToProps({ products }) {
    return { products };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Shop));


