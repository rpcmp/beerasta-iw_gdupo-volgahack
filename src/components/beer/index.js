import React from 'react';
import Header from './header/index';
import Filter from './filter/index';
import Main from './main';
import './beer.scss';

class Beer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="beer">
                <Header />  
                <Filter />
                <Main/>
            </div>
        )
    }

    componentDidMount() {

    }

    getItems() {

    }
}

export default Beer;