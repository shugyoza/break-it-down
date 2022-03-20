import React from 'react';
import Item from'./Item';

export default function ItemList({items}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>$</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <Item item={item} />)}
            </tbody>
                </table>
    )
}
