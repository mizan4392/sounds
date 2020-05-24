import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Card } from 'antd';
import 'antd/dist/antd.css';

import {setSelectedShiping} from '../../Redux/actions/misc_action'

const { Option } = Select;


class DropdownShiping extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shiping:['yes','no'],
        };
        this.onChange = this.onChange.bind(this);

    }


    onChange(value) {
        this.props.setSelectedShiping(value)
    }


    renderDropDownOptions() {
        var arr = []
        let {shiping} = this.state
      
        if (shiping) {
            for (var i = 0; i <  shiping.length; i++) {
                var data = shiping[i];
                arr.push(<Option key={i} value={data}>{data}</Option>)
            }

        }
        return arr;
    }

    render() {

        return (
            <Card title="Select Shiping" size="small" >
                <Select
                    style={{ width: "100%", minWidth: '200px' }}
                    placeholder={"Select Shiping"}
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
    return bindActionCreators({setSelectedShiping}, dispatch);
}


export default connect(undefined, mapDispatchToProps)(DropdownShiping);

