import React, {useState, useEffect} from 'react';
import Item from './item';

function Items(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://beerasta.herokuapp.com/item/list")
        .then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(com => {
            setItems(com)
        })

    }, []);

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);

    return (
        <div className="items">
        {
            items.map((val, num) => {
                return <Item key={val.id} {...val}/>
            })
        }
            {/* <Item
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
            /> */}
        </div>
    );
}

export default Items;