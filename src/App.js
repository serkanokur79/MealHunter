import React, { Component } from 'react';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import MealList from './components/MealList';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    meals: []
  };
  componentDidUpdate = () => {
    const meals = JSON.stringify(this.state.meals);
    localStorage.setItem('meals', meals);
  };
  componentDidMount() {
    const json = localStorage.getItem('meals');
    const meals = JSON.parse(json);
    this.setState({ meals: meals });
  }

  getRecipe = async e => {
    const searchName = e.target.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    );
    const data = await api_call.json();

    this.setState({ meals: data.meals });
    console.log(this.state.meals);
  };
  render() {
    return (
      <div>
        <Header title='Meal Hunter' />
        <Form getRecipe={this.getRecipe} />
        <MealList meals={this.state.meals} />
        <Footer />
      </div>
    );
  }
}

export default App;
