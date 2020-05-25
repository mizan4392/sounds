import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Card } from 'antd';
import 'antd/dist/antd.css';

import {setSelectedPublish} from '../../Redux/actions/misc_action'

const { Option } = Select;


class DropdownPublish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publish:['yes','no'],
        };
        this.onChange = this.onChange.bind(this);

    }


    onChange(value) {
        this.props.setSelectedPublish(value)
    }


    renderDropDownOptions() {
        var arr = []
        let {publish} = this.state
      
        if (publish) {
            for (var i = 0; i <  publish.length; i++) {
                var data = publish[i];
                arr.push(<Option key={i} value={data}>{data}</Option>)
            }

        }
        return arr;
    }

    render() {

        return (
            <Card title="Select Publish Status" size="small" >
                <Select
                    style={{ width: "100%", minWidth: '200px' }}
                    placeholder={"Select Publish Status"}
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
    return bindActionCreators({setSelectedPublish}, dispatch);
}


export default connect(undefined, mapDispatchToProps)(DropdownPublish);

