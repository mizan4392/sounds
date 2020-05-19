import React from 'react'

function Page_Top(props) {
    return (
        <div className="page_top">
            <div className="container">
                {props.title}
            </div>
            
        </div>
    )
}

export default Page_Top
