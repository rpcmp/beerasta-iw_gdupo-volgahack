import React from 'react';
import Item from './item';

function Items() {
    return (
        <div className="main">
            <Item
                key="0"
                address="Тестовый адрес"
                people="5..15"
                time="17:00"
                alco=""
                money="бесплатно"
            />

            <Item
                key="0"
                address="Тестовый адрес dsadasdasdsadsa"
                people="5..15"
                time="17:00"
                alco=""
                money="20 руб"
            />
        </div>
    );
}

export default Items;