import React from 'react';
import Item from './Item';
import ItemAdd from './ItemAdd';

export default function ItemList(props) {

    const th1 = '#';
    const th2 = 'Detail';
    const th3 = 'Sub-total';

    return (
        <section className='table'><h2 className='noprint'>Itemize List</h2>
            <div className='clearFields'><button className='noprint btn-delete' onClick={props.clickClearFields}>Delete ALL Items</button></div>
            <div className='thead'>
                <div className='tr'>
                    <div className='th seq'>{th1}</div>
                    <div className='th col-1'>{th2}</div>
                    <div className='th col-2'>{th3}</div>
                    <div className='th col-btn noprint'></div>
                </div>
            </div>
            <div className='tbody'>
                {props.items.map((item, idx) => {
                    return (
                        <div className='tr' key={item.id}>
                            <Item idx={idx} item={item} items={props.items} setItems={props.setItems} total={props.total} setTotal={props.setTotal} deleteItem={props.deleteItem} toIntX100={props.toIntX100} showPennies={props.showPennies} />
                        </div>
                    )
                })
                }
            </div>
            <ItemAdd setItems={props.setItems} setTotal={props.setTotal} />
            <div className='tfoot'>
                <div className='tr'>
                    <div className='td seq'></div>
                    <div className='td col-1'>Total</div>
                    <div className='td col-2'><button className='table-data currency'>{props.showPennies(props.total)}</button></div>
                    <div className='td col-btn noprint'></div>
                </div>
            </div>

        </section>
    )
}
