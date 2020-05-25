import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import FontAewsomeIcon from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/fontawesome-free-solid'
import {CircularProgress} from '@material-ui/core'

class FileUplode extends Component {

    state={
        uplodeFile:null,
        uploding:false
    }

    onDrop = file =>{
        this.setState({uploding:true});
        const config = {
            header:{'content-type':'multipart/form-data'}
        }
        axios.post('api/users/uploadimage',this.state.uplodeFile,config)
            .then(res=>{
                this.setState({uploding:false,uplodeFile:[
                    ...this.state.uplodeFile,
                    res.data
                ]},()=>{
                    this.props.imageHandler(this.state.uplodeFile)
                })
            })
    }
    render() {
        return (
            <div>
                <section>
                    <div className="dropzone clear">
                        <Dropzone
                            onDrop={(e)=>this.onDrop(e)}
                            multiple={false}
                            className="dropzone_box"
                            >
                                <div className="wrap">
                                    <FontAewsomeIcon icon={faPlusCircle}/>
                                </div>
                            {
                                this.state.uploding ? 
                                    <div className="dropzone_box" style={{textAlign:'center',paddingTop:'60px'}}>
                                        <CircularProgress style={{color:'#00bcd4'}} thickness={7}/>
                                    </div>    
                                :null
                            }
                        </Dropzone>

                    </div>
                </section>
                
            </div>
        )
    }
}

export default FileUplode
