import { useParams } from 'react-router-dom';
import data from '../data.js' ;
import { React, useEffect, useState } from 'react';
import ProductSet from '../components/ProductSet.js';
import DetailSet from '../components/DetailSet.js';

export default function MainContents() {
  let [shoes] = useState(data) ;
  let {id} = useParams();

  useEffect(() => {
    console.log("렌더링 될때마다 실행");
  });

  return (
    <div className="container">
    { id === undefined ? <ProductSet shoesData= { shoes } /> : <DetailSet shoesData={shoes} productIidx={id} /> }
    </div>
    )
}
