import React from 'react';
import axios from 'axios';
import InputItem from './InputItem';
import SelectCategory from './SelectCategory';
import Button from './Button';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this)
        this.handleProductInputChange = this.handleProductInputChange.bind(this)
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
        return (
            <div>
                <InputItem
                   handleProductInputChange={this.handleProductInputChange}
                   typingItem={this.props.typingItem}
                />

                <SelectCategory
                    categories={this.props.categories}
                />

                <Button 
                    handleButton={this.handleButton}
                />
            </div>
        )}

}

export default ItemForm;


