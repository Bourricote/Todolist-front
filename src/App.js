import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';

import InputItem from './components/InputItem';
import CategoryList from './components/CategoryList';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      categories : [],
      items : [],
    }  
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
          <CategoryList />
        </div>
       
      </div>
    );
  }
  
}

export default App;
