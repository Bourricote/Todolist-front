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
      allItems: [],
    }  
    this.getCategories = this.getCategories.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
  }

  getCheckedRate() {
    let allItems = this.state.allItems;
    let numberOfChecked = 0;
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].isChecked) numberOfChecked ++;
    }
    return (numberOfChecked / allItems.length) *100
  }

  getCategories() {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(response => response.data)
      .then(data =>
        this.setState({
          categories: data['hydra:member']
        }))
  }

  getAllItems() {
    axios.get('http://127.0.0.1:8000/api/items?order[isChecked]')
      .then(response => response.data)
      .then(data =>
        this.setState({
          allItems: data['hydra:member'],
        })
      )
  }

  componentDidMount() {
    this.getCategories();
    this.getAllItems();
  }

  componentDidUpdate() {
    this.getAllItems();
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
