import React, { Component } from 'react'
import { TextField, Button ,TextareaAutosize} from '@material-ui/core'
import UserLayout from '../../../hoc/UserLayout'
import DropDown_Brand from '../../Dropdowns/DropDown_Brand'
import DropdownShiping from '../../Dropdowns/DropdownShiping'
import DropDownStock from '../../Dropdowns/DropDownStock'
import DropDownWoods from '../../Dropdowns/DropDownWoods'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DropdownFrets from '../../Dropdowns/DropdownFrets'
import DropdownPublish from '../../Dropdowns/DropdownPublish'


class AddProduct extends Component {


    state = {
        name: '',
        description: '',
        price:0
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e =>{
        e.preventDefault()

        let data = {
            ...this.state,
            brand:this.props.misc.selectedBrandId,
            shipping:this.props.misc.selectedShiping,
            available:this.props.misc.selectedStock,
            wood:this.props.misc.selectedWoodId,
            frets:this.props.misc.selectedFretsId,
            publish:this.props.misc.selectedPublish
        }

        console.log(data)
    }
    render() {

        console.log(this.props.misc)
        return (
            <UserLayout>
                <h2>Add new Product</h2>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <TextField type="text" name="name" value={this.state.name} placeholder="Enter Product Name" id="outlined-basic" label="ProductName" size='medium' onChange={this.handleInputChange} /><br></br>
                    <TextareaAutosize rows={4} type="text" name="description" value={this.state.description} placeholder="Product Description" id="outlined-basic" label="description" size='medium' onChange={this.handleInputChange} /><br></br>
                    <TextField type="number" name="price" value={this.state.price} placeholder="Enter Product Price" id="outlined-basic" label="Price" size='medium' onChange={this.handleInputChange} /><br></br>
                    <div>
                        <DropDown_Brand />
                    </div>
                    <div>
                        <DropdownShiping />
                    </div>
                    <div>
                        <DropDownStock />
                    </div>
                    <div>
                        <DropDownWoods />
                    </div>
                    <div>
                       <DropdownFrets />
                    </div>
                    <div>
                       <DropdownPublish />
                    </div>
                    <div>
                       <Button onClick={this.handleSubmit}>Add Product</Button>
                    </div>
                </div>
            </UserLayout>

        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({ misc }) {
    return {
        misc
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

