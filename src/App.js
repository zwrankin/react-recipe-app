import React, {Component} from 'react';
import './App.css'

import Form from "./components/Form";
import Recipes from "./components/Recipes"
import Validator from "./components/Validator"

const API_KEY = "b2b519fa5cf544c8da39416925534c84";

class App extends Component {
  state = {
    query: "",
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    this.setState({ query: recipeName});

    if(recipeName.toLowerCase() === "fish"){

        const query = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
        const api_call = await fetch(query);

        const data = await api_call.json();

        this.setState({ recipes: data.recipes});
        console.log(this.state.recipes)

    } else {
        console.log('FISH PLEASE')
        this.setState({ recipes: []});
    }

  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
        <Validator query={this.state.query}></Validator>
      </div>

    )
  }
}

export default App