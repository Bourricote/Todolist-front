import React from 'react';
import Category from './Category';
import axios from 'axios';

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
        this.getCategories = this.getCategories.bind(this);
    }

    getCategories() {
        axios.get('http://127.0.0.1:8000/api/categories')
            .then(response => response.data)
            .then(data =>
                this.setState({
                    categories: data['hydra:member']
                }))
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        return(
            <ul>
                {this.state.categories.map(
                    (category, i) =>
                        <li key={i}>
                            <Category
                                category={category}
                            />

                        </li>
                )
                }
            </ul>
        )
    }
}

export default CategoryList;