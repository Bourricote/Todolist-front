import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange(event) {
        axios.put('http://127.0.0.1:8000/api/items/' + event.target.value, {
            'title': event.target.getAttribute('data-title'),
            'isChecked': event.target.checked,
            'category': 'api/categories/3',
        })
            .then(response => {
                this.props.getItems()
            })
    }

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