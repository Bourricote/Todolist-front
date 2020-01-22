import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Item from './components/Item';
import { useRadioGroup } from '@material-ui/core';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items : [],
    }
    this.handleProductInputChange = this.handleProductInputChange.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  getItems() {
    axios.get('http://127.0.0.1:8000/api/items?order[isChecked]')
      .then(response => response.data)
      .then(data => 
          this.setState({
            items : data['hydra:member'],
            typingItem : null,
          })
        )
  }

  componentDidMount() {
    this.getItems();
  }

  handleProductInputChange(event) {
    this.setState({
      typingItem : event.target.value,
    })
  }

  handleButton(){
    axios.post('http://127.0.0.1:8000/api/items', {
      'title' : this.state.typingItem,
      'isChecked' : false,
      'category' : 'api/categories/3'
    })
      .then(response => {
        this.getItems()
        this.setState({
          typingItem : null
        })
      })
      .catch(function (error) {
        console.log('error');
      })
  }

  handleCheckboxChange(event) {
    axios.put('http://127.0.0.1:8000/api/items/' + event.target.value, {
      'title' : event.target.getAttribute('data-title'),
      'isChecked' : event.target.checked,
      'category': 'api/categories/3',
    })
      .then(response => {
        this.getItems()
      })
  }

  getCheckedRate() {
    let items = this.state.items;
    let numberOfChecked = 0;
    for (let i = 0; i < items.length; i++) {
      if ( items[i].isChecked) numberOfChecked ++;
    }
    return (numberOfChecked/items.length) *100
  }

  render() {
  
    const{items} = this.state
    const{typingItem} = this.state

    const InputItem = () => {
      return (
        <div>
          <label htmlFor="input-item">Produit</label>
          <input 
            defaultValue={typingItem}
            autoFocus
            onChange={this.handleProductInputChange}
            type="text" 
            id="input-item" 
          />
          <button
            onClick={this.handleButton}
          >OK</button>
        </div>
      )
    };

    return (
      <div className="App">
        <div>
          <LinearProgress
            className='progressBar'
            variant="determinate"
            value={this.getCheckedRate()}
            color="secondary"
          />
          <InputItem/>
        </div>
        <ul>
          {
            items.map((item, i) => 
              <li key={i}>
                <Item 
                id={item.id}
                isChecked={item.isChecked}
                title={item.title}
                handleCheckboxChange={this.handleCheckboxChange}
                />
              </li>
            )
            }
        </ul>
      </div>
    );
  }
  
}

export default App;
