import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { List, ListItem, ListItemSecondaryAction, ListItemText, Radio, RadioGroup, Collapse, FormControlLabel } from '@material-ui/core'

class CollapsRadio extends Component {

    state = {
        open: false,
        value: '0'
    }

    componentDidMount() {
        if (this.props.initState) {
            this.setState({ open: this.props.initState })
        }
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({ open: !this.state.open })
    }

    handleAngle = () => {
        return this.state.open ?
            <FontAwesomeIcon icon={faAngleUp} className="icon" />
            :
            <FontAwesomeIcon icon={faAngleDown} className="icon" />
    }

    handleChange = (event) =>{
        this.props.handleFilters(event.target.value)
        this.setState({value:event.target.value})
    }


    render() {

        const renderRadio = this.props.list ?
            this.props.list.map((value) => {
                return (
                    <FormControlLabel 
                        key={value._id} 
                        value={`${value._id}`}
                        control={<Radio/>}
                        label={value.name}
                    >

                    </FormControlLabel>
                )

            })
            : null

        return (
            <div>
                <List style={{ borderBottom: '1px solid #dbdbdb' }}>
                    <ListItem onClick={this.handleClick} style={{ padding: '10px 23px 10px 0' }} >
                        <ListItemText
                            primary={this.props.title}
                            className="collapse_title"
                        />
                        {this.handleAngle()}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit >
                        <List component="div" disablePadding>
                            <RadioGroup aria-label="price" 
                                name="prices"
                                value={this.state.value}
                                onChange={this.handleChange}>

                                    {renderRadio}

                            </RadioGroup>
                        </List>
                    </Collapse>


                </List>
            </div>
        )
    }
}
export default CollapsRadio