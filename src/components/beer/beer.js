import React from 'react';
import './beer.scss';
import Filter from './filter/filter'
import Add from './add/add';


function Beer(){
    return (
        <div className="beer">
            <Filter/>
            <div className="main">
                <Add/>
            </div>
        </div>
    );
};

export default Beer;