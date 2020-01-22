import React from 'react';
import ItemList from './ItemList';
import axios from 'axios';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            
            <div className="category">
                {this.props.category.name}
                <ItemList
                    categoryId={this.props.category.id}
                />

            </div>
        )
    }
}

export default Category;
