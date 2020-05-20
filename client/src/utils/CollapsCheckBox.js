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

    renderList = () => {

        console.log('lists-------',this.props.list)

        return this.props.list ?
            this.props.list.map((value) => {
                return (
                    <div>
                        hey
                    </div>
                )

            })
            : <div></div>

    }
    render() {
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
                            {this.renderList()}

                        </List>
                    </Collapse>
                </List>

            </div>
        )
    }
}

export default CollapsCheckBox
