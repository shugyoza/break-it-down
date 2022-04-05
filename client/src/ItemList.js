import React from 'react';
import ItemAdd from './ItemAdd';
import Item from './Item';

export default function ItemList(props) {

    const th1 = '#';
    const th2 = 'Detail';
    const th3 = 'Sub-total';

    return (
        <div className='table'><h2 className='noprint'>List</h2>
            <div className='clearFields'><button className='noprint' onClick={props.clickClearFields}>Clear Fields</button></div>
            <div className='thead'>
                <div className='tr'>
                    <div className='th no'>{th1}</div>
                    <div className='th'>{th2}</div>
                    <div className='th'>{th3}</div>
                    <div className='th noprint'></div>
                </div>
            </div>
            <div className='tbody'>
                {props.items.map((item, idx) => {
                    return (
                        <div className='tr' key={item.id}>
                            <Item idx={idx} item={item} items={props.items} setItems={props.setItems} total={props.total} setTotal={props.setTotal} deleteItem={props.deleteItem} />
                        </div>
                    )
                })
                }
            </div>
            <div className='tfoot'>
                <div className='tr'>
                    <div className='td no'></div>
                    <div className='td'>Total</div>
                    <div className='td'>{props.total}</div>
                    <div className='td noprint'></div>
                </div>
            </div>

        </div>
    )
}
