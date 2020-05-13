import React from 'react'
import { Link } from 'react-router-dom';

function MyButton(props) {


    const buttons = () => {
        let templete = '';

        switch (props.type) {

            case "default":
                templete = <Link
                    className="link_default"
                    to={props.linkTo}
                    {...props.addStyles}>

                    {props.title}
                </Link>
                
                break;

            default:
                templete = ''
        }
        return templete
    }
    return (
        <div className="my_link">
            {buttons()}
        </div>
    )
}

export default MyButton
