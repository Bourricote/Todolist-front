import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';

import InputItem from './components/InputItem';
import ItemList from './components/ItemList';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      categories : [],
      items : [],
    }  
    this.getItems=this.getItems.bind(this);
  }

  getCategories() {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(response => response.data)
      .then(data =>
        this.setState({
          categories : data['hydra:member']
        }))
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
    this.getCategories();
    this.getItems();
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
  
    return (
      <div className="App">
        <div>
          <LinearProgress
            className='progressBar'
            variant="determinate"
            value={this.getCheckedRate()}
            color="secondary"
          />
          <InputItem
            typingItem={this.state.typingItem}
            handleProductInputChange={this.handleProductInputChange}
            handleButton={this.handleButton}
          /> 
          <ItemList 
            items={this.state.items}
            getItems={this.getItems}
          />
        </div>
       
      </div>
    );
  }
  
}

export default App;
