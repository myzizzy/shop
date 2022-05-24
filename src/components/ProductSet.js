import React from 'react'
import ShoesItem from './ShoesItem';

function ProductSet(props) {
  return (
    <div className='row'>
    { 
        props.shoesData.map( function(e, i) {
        return (
            <ShoesItem toData={ props.shoesData[i] } idx={ i } key={ i } />
        );
        })
    }
    </div>
  )
}
export default ProductSet ;