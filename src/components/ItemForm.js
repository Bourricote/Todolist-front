import React from 'react';
import axios from 'axios';
import InputItem from './InputItem';
import SelectCategory from './SelectCategory';
import Button from './Button';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typingItem: null,
            selectedCategory: null,
        }  
        this.handleProductInputChange = this.handleProductInputChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
    }

    handleProductInputChange(event) {
        this.setState({
            typingItem: event.target.value,
        })
    }

    handleSelectChange(event) {
        console.log(event.target.value)
        this.setState({
            selectedCategory: event.target.value,
        })
    }

    handleButton() {
        axios.post('http://127.0.0.1:8000/api/items', {
            'title': this.state.typingItem,
            'isChecked': false,
            'category': 'api/categories/' + this.state.selectedCategory
        })
            .then(response => {
                this.props.getItems(this.state.selectedCategory)
                this.setState({
                    typingItem: null,
                    selectedCategory: null
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
                    handleSelectChange={this.handleSelectChange}
                    categories={this.props.categories}
                />

                <Button 
                    handleButton={this.handleButton}
                    selectedCategory={this.props.selectedCategory}
                />
            </div>
        )}

}

export default ItemForm;


