import React from 'react'

function DetailSet( props ) {
    function checkIdx() {
        let len = props.shoesData.length ;
        for ( let i = 0 ; i < len ; i ++ ) {
            if(props.shoesData[i].id == props.productIidx ){
                return i ;
            }
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + props.shoesData[checkIdx()].imgPath} alt='aaa' width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{ props.shoesData[checkIdx()].title }</h4>
                <p>{props.shoesData[checkIdx()].content}</p>
                <p>{props.shoesData[checkIdx()].price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>  
    )
}
export default DetailSet