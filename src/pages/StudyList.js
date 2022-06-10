import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

function StudyList( props ) {
    let goDetail = useNavigate() ;

    function gotoDetail( id ) {
        goDetail('/study/' + id ) ;
    }

    return (
        <div className="container">
        <div className='row'>
        { 
            props.docData.map( function(e, i) {
            return (
                <div className='col-md-4' key={i} onClick={()=>{ gotoDetail( props.docData[i].id) }}>
                    <img src={process.env.PUBLIC_URL + props.docData[i].imgPath} width="80%" alt="aaa" />
                    <h5>{ props.docData[i].title  }</h5>
                    <p>{ props.docData[i].content }</p>
                    <p>{ props.docData[i].price }</p>
                </div>
            );
            })
        }
        </div>
        <Outlet></Outlet>
        </div>
    )
}
export default StudyList ;
