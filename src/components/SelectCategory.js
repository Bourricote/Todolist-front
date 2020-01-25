import React from 'react';

class SelectCategory extends React.Component {

    render() {
        return(
            <select
                onChange={this.props.handleSelectChange}
                value={this.props.selectedCategory}>
                {this.props.categories.map(
                    (category, i) =>
                        <option key={i}
                          value={category.id}
                          >
                              {category.name}
                        </option>
                )
                }
            </select>
        )
    }
}

export default SelectCategory;
