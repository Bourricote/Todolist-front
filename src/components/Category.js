import React from 'react';
import ItemList from './ItemList';

class Category extends React.Component {

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
