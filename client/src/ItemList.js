import React from 'react';
import ItemAdd from './ItemAdd';
import Item from './Item';

export default function ItemList(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Detail</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <ItemAdd setItems={props.setItems} setTotal={props.setTotal} />
                </tr>
                {props.items.map((item, idx) => {
                    return (
                        <tr key={item.id}>
                            <Item idx={idx} item={item} items={props.items} setItems={props.setItems} total={props.total} setTotal={props.setTotal} deleteItem={props.deleteItem} />
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}
