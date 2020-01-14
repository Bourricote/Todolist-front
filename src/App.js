import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items : [],
    }
  }

  getItems() {
    axios.get('http://127.0.0.1:8000/api/items')
      .then(response => response.data)
      .then(data => 
          this.setState({
            items : data['hydra:member'],
          })
        )
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
  
    const{items} = this.state

    const InputItem = () => {
      return (
        <div>
          <label htmlFor="input-item">Produit</label>
          <input type="text" id="input-item" />
          <button>OK</button>
        </div>
      )
    };

    return (
      <div className="App">
        <div>
          <InputItem/>
        </div>
        <ul>
          {
            items.map((item, i) => 
              <li>{item.title}</li>
            )
            }
        </ul>
      </div>
    );
  }
  
}

export default App;
