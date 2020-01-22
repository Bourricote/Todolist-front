import React, { Component } from 'react';

class Item extends React.Component {
    render() {
        return(
            <div className="item">
                <input
                    type="checkbox"
                    id={'check'}
                    onChange={this.props.handleCheckboxChange}
                    data-title={this.props.title}
                    value={this.props.id}
                    checked={this.props.isChecked}
                />
                <label
                    htmlFor={'check'}
                    className={this.props.isChecked ? 'crossed' : ''}
                >
                    {this.props.title}
                </label>
            </div>   
        )
    }
}

export default Item;