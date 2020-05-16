import React, { Component } from 'react'
import Home_Slider from './Home_Slider'
import Home_Promotion from './Home_Promotion'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getProductBySell,getProductByArrival} from '../../Redux/actions/product_action'
import { withRouter } from 'react-router-dom';
import Card_Bolock from '../../utils/Card_Bolock';



class Home extends Component {

    state={
        byArrival:[],
        bySell:[]
    }

    componentDidMount(){
        this.props.getProductBySell().then(res=>{
            console.log(res.payload)
            this.setState({bySell:res.payload})
        })

        this.props.getProductByArrival().then(res=>{
            console.log(res.payload)
            this.setState({byArrival:res.payload})
        })
    }
    render() {
        console.log("------------------",this.props.product)
        return (
            <div>
                <Home_Slider />
                <Card_Bolock title="Best Sellings" list={this.state.bySell }/>
                <Home_Promotion />
                <Card_Bolock title="New Arrivals" list={this.state.byArrival }/>
            </div>
        )
    }
}




function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProductBySell,getProductByArrival }, dispatch);
  }
  
  
  function mapStateToProps({ product }) {
    return { product };
  }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));

