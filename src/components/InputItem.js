import React from 'react';
import axios from 'axios';

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
            </div>
        )
    }

}

export default InputItem;