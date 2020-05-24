import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Card } from 'antd';
import 'antd/dist/antd.css';

import {setSelectedStock} from '../../Redux/actions/misc_action'

const { Option } = Select;


class DropDownStock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stock:['yes','no'],
        };
        this.onChange = this.onChange.bind(this);

    }


    onChange(value) {
        this.props.setSelectedStock(value)
    }


    renderDropDownOptions() {
        var arr = []
        let {stock} = this.state
      
        if (stock) {
            for (var i = 0; i <  stock.length; i++) {
                var data = stock[i];
                arr.push(<Option key={i} value={data}>{data}</Option>)
            }

        }
        return arr;
    }

    render() {

        return (
            <Card title="Stock ability" size="small" >
                <Select
                    style={{ width: "100%", minWidth: '200px' }}
                    placeholder={"Stock ability"}
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
    return bindActionCreators({setSelectedStock}, dispatch);
}


export default connect(undefined, mapDispatchToProps)(DropDownStock);
