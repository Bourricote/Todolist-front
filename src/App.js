import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import CategoryList from './components/CategoryList';
import ItemForm from './components/ItemForm';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      categories : [],
    }  
    this.getCategories = this.getCategories.bind(this);
  }

  /* getCheckedRate() {
    let items = this.state.items;
    let numberOfChecked = 0;
    for (let i = 0; i < items.length; i++) {
      if ( items[i].isChecked) numberOfChecked ++;
    }
    return (numberOfChecked/items.length) *100
  } */

  getCategories() {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(response => response.data)
      .then(data =>
        this.setState({
          categories: data['hydra:member']
        }))
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
  
    return (
      <div className="App">
        <div>

          <LinearProgress
            className='progressBar'
            variant="determinate"
            // value={this.getCheckedRate()}
            color="secondary"
          />

          <ItemForm 
            categories={this.state.categories}
            typingItem={this.state.typingItem}
            getItems={this.getItems}
          />
        
          <CategoryList 
            categories={this.state.categories}
            getItems={this.getItems}
          />

        </div>
      </div>
    );
  }
  
}

export default App;
