import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, Collapse } from '@material-ui/core'

class CollapsCheckBox extends Component {

    state = {
        open: false,
        checked: []
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
    hendleToggle = id => () => {

        const { checked } = this.state
        const currentIndex = checked.indexOf(id)
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(id)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        this.setState({checked: newChecked},()=>{
            this.props.handleFilters(newChecked)
        })
    }

    render() {

        const renderList = this.props.list ?
            this.props.list.map((value) => {
                return (

                    <ListItem key={value._id} style={{ padding: '10px 0' }} >
                        <ListItemText primary={value.name} />

                        <ListItemSecondaryAction>
                            <Checkbox
                                color="primary"
                                onChange={this.hendleToggle(value._id)}
                                checked={this.state.checked.indexOf(value._id) !== -1}
                            />
                        </ListItemSecondaryAction>

                    </ListItem>
                )

            })
            : null


        return (
            <div className="collapse_items_wrapper">
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
                            {renderList}

                        </List>
                    </Collapse>


                </List>

            </div>
        )
    }
}

export default CollapsCheckBox
