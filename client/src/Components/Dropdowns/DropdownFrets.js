import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Card } from 'antd';
import 'antd/dist/antd.css';
import {setSelectedFretsId} from '../../Redux/actions/misc_action'
import {frets} from '../../utils/fixed_cat'
const { Option } = Select;


class DropdownFrets extends Component {



    onChange = (value)=> {

        this.props.setSelectedFretsId(value)
    }


    renderDropDownOptions() {
        var arr = []
      
        if (frets) {
            for (var i = 0; i <  frets.length; i++) {
                var data = frets[i];
                arr.push(<Option key={i} value={data._id}>{data.name}</Option>)
            }

        }
        return arr;
    }

    render() {

        return (
            <Card title="Select Frets" size="small" >
                <Select
                    style={{ width: "100%", minWidth: '200px' }}
                    placeholder={"Select Frets"}
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
    return bindActionCreators({setSelectedFretsId}, dispatch);
}


export default connect(undefined, mapDispatchToProps)(DropdownFrets);


