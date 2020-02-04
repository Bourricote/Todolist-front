import React from 'react';
import ItemList from './ItemList';

class Category extends React.Component {

    render() {
        return(
            
            <div className="category">
                {this.props.category.name}
                <ItemList
                    reload={this.props.reload}
                    categoryId={this.props.category.id}
                    getItems={this.props.getItems}
                />

            </div>
        )
    }
}

export default Category;
