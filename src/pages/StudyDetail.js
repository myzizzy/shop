import React from 'react'
import { useParams } from 'react-router-dom';

function StudyDetail( props ) {
    let {id} = useParams();

    function checkIdx() {
        let len = props.docData.length ;
        for ( let i = 0 ; i < len ; i ++ ) {
            if(props.docData[i].id == id ){
                return i ;
            }
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + props.docData[checkIdx()].imgPath} alt='aaa' width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ props.docData[checkIdx()].title }</h4>
                    <p>{props.docData[checkIdx()].content}</p>
                    <p>{props.docData[checkIdx()].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>  
    )
}

export default StudyDetail