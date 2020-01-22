import React, { Component } from 'react';
import Item from './Item';

class ItemList extends React.Component {
    render() {
        return(
        <ul>
            {this.props.items.map(
                (item, i) =>
                    <li key={i}>
                        <Item
                            id={item.id}
                            isChecked={item.isChecked}
                            title={item.title}
                            handleCheckboxChange={this.handleCheckboxChange}
                        />
                    </li>
                )
            }
        </ul>
        )
    }
}


export default ItemList;