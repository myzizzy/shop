import React from "react";
import { useState } from 'react';
import ShoesItem from "./ShoesItem";
import data from '../data.js' ;

function MainView() {
    let [shoes] = useState(data) ;
    
    return (
        <div className='container'>
            <div className='row'>
            { 
                shoes.map( function(e, i) {
                return (
                    <ShoesItem toData={ shoes[i] } idx={ i } key={ i } />
                );
                })
            }
            </div>
        </div>
    )
}
export default MainView ;