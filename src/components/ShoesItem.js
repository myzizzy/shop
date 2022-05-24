import React from "react";
import { useNavigate } from "react-router-dom";

function ShoesItem( props ) {
    let goDetail = useNavigate() ;

    function gotoDetail( id ) {
        goDetail('/shop/' + id ) ;
    }
    return (
        <div className='col-md-4' onClick={()=>{ gotoDetail( props.toData.id) }}>
            <img src={process.env.PUBLIC_URL + props.toData.imgPath} width="80%" alt="aaa" />
            <h5>{ props.toData.title  }</h5>
            <p>{ props.toData.content }</p>
            <p>{ props.toData.price }</p>
        </div>
    )
}
export default ShoesItem ;