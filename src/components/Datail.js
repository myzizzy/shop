import React from "react";

function Detail( props ) {
    return (
        <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + props.toData.imgPath} width="80%" />
            <h5>{ props.toData.title  }</h5>
            <p>{ props.toData.content }</p>
            <p>{ props.toData.price }</p>
        </div>
    )
}
export default Detail ;