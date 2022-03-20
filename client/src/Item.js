import React from 'react'

export default function Item({item}) {

    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td><input value={item.name} type='text'/></td>
            <td><input value={item.val} type='text' /></td>
            <button>Delete</button>
        </tr>
    )
}
