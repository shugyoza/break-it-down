import React from 'react';
import ItemAdd from './ItemAdd';
import Item from './Item';

export default function ItemList(props) {

    return (
        <div className='table'>
            <div className='thead'>
                <div className='tr'>
                    <div className='th no'>#</div>
                    <div className='th'>Detail</div>
                    <div className='th'>Value</div>
                    <div className='th'></div>
                </div>
            </div>
            <div className='tbody'>
                <div className='tr'>
                    <ItemAdd setItems={props.setItems} setTotal={props.setTotal} />
                </div>
                {props.items.map((item, idx) => {
                    return (
                        <div className='tr' key={item.id}>
                            <Item idx={idx} item={item} items={props.items} setItems={props.setItems} total={props.total} setTotal={props.setTotal} deleteItem={props.deleteItem} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
