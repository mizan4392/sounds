import React, { Component } from 'react'
import Page_Top from '../../utils/Page_Top'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProductBrands, getProductWoods ,getProductToShop} from '../../Redux/actions/product_action'
import CollapsCheckBox from '../../utils/CollapsCheckBox'
import CollapsRadio from '../../utils/CollapsRadio'
import { frets,price } from '../../utils/fixed_cat'
import LoadMoreCard from './LoadMoreCard'

class Shop extends Component {


    state = {
        grid: '',
        limit: 6,
        skip: 0,
        filters: {
            brand: [],
            frets: [],
            wood: [],
            price: []
        }
    }

    componentDidMount() {

        this.props.getProductBrands()
        this.props.getProductWoods()
        this.props.getProductToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        )

    }

    handlePrice = (value) =>{
        const data = price
        let array = []

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }

        return array
    }

    showFiltersResult = (filters) =>{

        console.log("checked");
        this.props.getProductToShop(
            0,
            this.state.limit,
            filters
        ).then(()=>{
            this.setState({skip:0})
        })
    }

    handleFilters = (filters, category) => {
        const newFilters = { ...this.state.filters }
        newFilters[category] = filters

        if(category === "price"){
            let priceValues = this.handlePrice(filters)
            newFilters[category] = priceValues
        }

        this.showFiltersResult(newFilters)

        this.setState({ filters: newFilters })
    }

    

    render() {


        console.log("shop 82====>",this.state)

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
                            <CollapsRadio
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters) => this.handleFilters(filters, 'price')}
                            />
                        </div>


                        <div className="left">
                            
                            <LoadMoreCard />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProductBrands, getProductWoods,getProductToShop }, dispatch);
}


function mapStateToProps({ products }) {
    return { products };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Shop));


