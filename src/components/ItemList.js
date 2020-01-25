import React from 'react';
import Item from './Item';
import axios from 'axios';

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        } 
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.getItems = this.getItems.bind(this)
    }

    handleCheckboxChange(event) {
        axios.put('http://127.0.0.1:8000/api/items/' + event.target.value, {
            'title': event.target.getAttribute('data-title'),
            'isChecked': event.target.checked,
            'category': 'api/categories/' + this.props.categoryId,
        })
            .then(response => {
                this.getItems(this.props.categoryId)
            })
    }

    getItems(categoryId) {
        axios.get('http://127.0.0.1:8000/api/items?category=' + categoryId + '&order[isChecked]')
            .then(response => response.data)
            .then(data =>
                this.setState({
                    items: data['hydra:member'],
                    typingItem: null,
                })
            )
    }

    componentDidMount() {
        this.getItems(this.props.categoryId);
    }

    render() {
        return(
        <ul>
            {this.state.items.map(
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