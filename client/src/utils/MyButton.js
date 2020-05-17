import React from 'react'
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/fontawesome-free-solid'


function MyButton(props) {


    const buttons = () => {
        let templete = '';

        switch (props.type) {

            case "default":
                templete = <Link
                    className={!props.altClass ? "link_default": props.altClass}  
                    to={props.linkTo}
                    {...props.addStyles}>

                    {props.title}
                </Link>
                
                break ;

                case "bag_link" :

                    templete = (
                        <div className="bag_link"
                            onClick={()=>{
                                props.runAction()
                            }}
                            >
                            <FontAwesomeIcon icon={faShoppingBag}>

                            </FontAwesomeIcon>
                        </div>
                    )

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
