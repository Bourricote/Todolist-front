import React from 'react';
import Category from './Category';

class CategoryList extends React.Component {

    render() {
        return(
            <ul>
                {this.props.categories.map(
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