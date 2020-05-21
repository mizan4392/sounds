import React from 'react'
import Card_Block_Shop from '../../utils/Card_Block_Shop'

 function LoadMoreCard(props) {
    return (
        <div>
            <div>
                <Card_Block_Shop grid={props.grid} list={props.list}/>
            </div>
            
        </div>
    )
}

export default LoadMoreCard
