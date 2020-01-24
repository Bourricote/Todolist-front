import React from 'react';

class SelectCategory extends React.Component {

    render() {
        return(
            <select>
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
