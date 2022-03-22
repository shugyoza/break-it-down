import React from 'react';
import ItemAdd from './ItemAdd';
import Item from './Item';

export default function ItemList({items, setItems, total, setTotal, editable, setEditable}) {

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
                    <ItemAdd setItems={setItems} setTotal={setTotal} />
                </tr>
                {items.map((item, idx) => {
                    return (
                        <tr key={item.id}>
                            <Item idx={idx} item={item} items={items} setItems={setItems} total={total} setTotal={setTotal} inputVal={item.name} editable={editable} setEditable={setEditable}/>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}
