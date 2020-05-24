import React, { Component } from 'react'
import { TextField, Button ,TextareaAutosize} from '@material-ui/core'
import UserLayout from '../../../hoc/UserLayout'
import DropDown_Brand from '../../Dropdowns/DropDown_Brand'
import DropdownShiping from '../../Dropdowns/DropdownShiping'
import DropDownStock from '../../Dropdowns/DropDownStock'
import DropDownWoods from '../../Dropdowns/DropDownWoods'
import DropdownFrest from '../../Dropdowns/DropdownFrest'


class AddProduct extends Component {


    state = {
        product_name: '',
        product_des: '',
        price:0
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <UserLayout>
                <h2>Add new Product</h2>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <TextField type="text" name="product_name" value={this.state.product_name} placeholder="Enter Product Name" id="outlined-basic" label="ProductName" size='medium' onChange={this.handleInputChange} /><br></br>
                    <TextareaAutosize rows={4} type="text" name="product_des" value={this.state.product_des} placeholder="Product Description" id="outlined-basic" label="description" size='medium' onChange={this.handleInputChange} /><br></br>
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
                       <DropdownFrest />
                    </div>
                </div>
            </UserLayout>

        )
    }
}

export default AddProduct
