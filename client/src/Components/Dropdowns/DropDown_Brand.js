import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Card } from 'antd';
import 'antd/dist/antd.css';
import {getProductBrands} from '../../Redux/actions/product_action'
import {setSelectedBrandId} from '../../Redux/actions/misc_action'

const { Option } = Select;


class DropDown_Brand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brands: null,


        };
        this.onChange = this.onChange.bind(this);

    }


    onChange(value) {



        this.props.setSelectedBrandId(value)

    }



    componentDidMount() {
        this.props.getProductBrands();
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.brand !== this.state.brand) {

            this.setState({
                brands: nextProps.brand
            });
        }

    }


    renderDropDownOptions() {
        var arr = []
        let {brand} = this.props
        console.log(brand)
        if (brand) {
            for (var i = 0; i <  brand.length; i++) {
                var data = brand[i];
                arr.push(<Option key={i} value={data._id}>{data.name}</Option>)
            }

        }
        return arr;
    }

    render() {

        return (
            <Card title="Select a Brand" size="small" >
                <Select
                    style={{ width: "100%", minWidth: '200px' }}
                    placeholder={"Select a Brand"}
                    optionFilterProp="children"
                    onChange={this.onChange}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {this.renderDropDownOptions()}
                    {/* {renderOptions} */}
                </Select>


            </Card>

        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getProductBrands,setSelectedBrandId}, dispatch);
}

function mapStateToProps({ products }) {
    return {
       brand: products.brands && products.brands.data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown_Brand);
