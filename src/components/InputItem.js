import React, { Component } from 'react';

class InputItem extends React.Component {
    render() {
        return(
            <div>
                <label htmlFor="input-item">Produit</label>
                <input
                    defaultValue={this.props.typingItem}
                    autoFocus
                    onChange={this.props.handleProductInputChange}
                    type="text"
                    id="input-item"
                />
                <button
                    onClick={this.props.handleButton}
                >OK</button>
            </div>
        )
    }

}

export default InputItem;