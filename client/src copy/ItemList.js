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
                    <ItemAdd items={props.items} setItems={props.setItems} total={props.total} setTotal={props.setTotal} inputs={props.inputs} setInputs={props.setInputs} />
                </tr>
                {props.items.map((item, idx) => {
                    return (
                        <tr key={item.id}>
                            <Item idx={idx} item={item} items={props.items} setItems={props.setItems} total={props.total} setTotal={props.setTotal} input={props.inputs[idx]} setInputs={props.setInputs} />
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}
