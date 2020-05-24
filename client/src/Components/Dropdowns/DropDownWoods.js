
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Card } from 'antd';
import 'antd/dist/antd.css';
import {getProductWoods} from '../../Redux/actions/product_action'
import {setSelectedWoodId} from '../../Redux/actions/misc_action'

const { Option } = Select;


class DropDownWoods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            woods: null,
        };
        this.onChange = this.onChange.bind(this);

    }


    onChange(value) {
        this.props.setSelectedWoodId(value)
    }



    componentDidMount() {
        this.props.getProductWoods();
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.wood !== this.state.wood) {

            this.setState({
                woods: nextProps.wood
            });
        }

    }


    renderDropDownOptions() {
        var arr = []
        let {wood} = this.props
        console.log(wood)
        if (wood) {
            for (var i = 0; i <  wood.length; i++) {
                var data = wood[i];
                arr.push(<Option key={i} value={data._id}>{data.name}</Option>)
            }

        }
        return arr;
    }

    render() {

        return (
            <Card title="Select a Wood" size="small" >
                <Select
                    style={{ width: "100%", minWidth: '200px' }}
                    placeholder={"Select a Wood"}
                    optionFilterProp="children"
                    onChange={this.onChange}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {this.renderDropDownOptions()}
                </Select>


            </Card>

        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getProductWoods,setSelectedWoodId}, dispatch);
}

function mapStateToProps({ products }) {
    return {
       wood: products.woods && products.woods.data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDownWoods);

