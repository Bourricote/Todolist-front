import React from 'react';
import axios from 'axios';

class InputItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleProductInputChange = this.handleProductInputChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
    }

    handleProductInputChange(event) {
        this.setState({
            typingItem: event.target.value,
        })
    }

    handleButton() {
        axios.post('http://127.0.0.1:8000/api/items', {
            'title': this.state.typingItem,
            'isChecked': false,
            'category': 'api/categories/3'
        })
            .then(response => {
                this.getItems()
                this.setState({
                    typingItem: null
                })
            })
            .catch(function (error) {
                console.log('error');
            })
    }

    render() {
        return(
            <div>
                <label htmlFor="input-item">Produit</label>
                <input
                    defaultValue={this.props.typingItem}
                    autoFocus
                    onChange={this.handleProductInputChange}
                    type="text"
                    id="input-item"
                />
                <button
                    onClick={this.handleButton}
                >OK</button>
            </div>
        )
    }

}

export default InputItem;