import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";

const GET_RECIPES_QUERY = gql`
  query {
    recipes {
      id
      title
      image
      url
      prepTime
      servings
      events {
        id
        mealType
        date
      }
      ingredients {
        id
        name
        quantity
      }
      instructions {
        id
        stepNum
        description
        isCompleted
      }
    }
  }
`;

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filter: new Set([])
    };
  }

  handleAddRecipe() {
    this.props.history.push("create");
  }

  handleSearch = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilter = meal => {
    let newFilter = new Set(this.state.filter);
    if (newFilter.has(meal)) newFilter.delete(meal);
    else newFilter.add(meal);

    this.setState({ filter: newFilter });
  };

  filterButtonClassName = meal => {
    return this.state.filter.has(meal)
      ? "button-selected"
      : "button-not-selected";
  };

  render() {
    return (
      <div className="recipesContainer">
        <Helmet>
          <title>Recipes | COOKBOOK</title>
        </Helmet>
        <div className="recipesFunctionBar">
          <button
            onClick={() => this.handleAddRecipe()}
            className="recipesAddRecipe"
          >
            + add recipe
          </button>
          <div className="search-input">
            <input
              type="text"
              name="search"
              placeholder="search"
              className="recipes-search"
              onChange={this.handleSearch}
              value={this.state.search}
            />
            <span className="searchicon" />
          </div>

          <div className="recipesFilterContainer">
            <div className="recipe-button-container">
              <button
                className={this.filterButtonClassName("breakfast")}
                onClick={() => this.handleFilter("breakfast")}
              >
                breakfast
              </button>
              <button
                className={this.filterButtonClassName("lunch")}
                onClick={() => this.handleFilter("lunch")}
              >
                lunch
              </button>
              <button
                className={this.filterButtonClassName("dinner")}
                onClick={() => this.handleFilter("dinner")}
              >
                dinner
              </button>
              <button
                className={this.filterButtonClassName("snack")}
                onClick={() => this.handleFilter("snack")}
              >
                snack
              </button>
              <button
                className={this.filterButtonClassName("dessert")}
                onClick={() => this.handleFilter("dessert")}
              >
                dessert
              </button>
            </div>
          </div>
        </div>
        <Query query={GET_RECIPES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            const recipesToRender = data.recipes.filter(recipe => {
              let hasMealType = true;
              if (this.state.filter.size) {
                const events = recipe.events.filter(e =>
                  this.state.filter.has(e.mealType)
                );
                hasMealType = events.length ? true : false;
              }
              const hasTitle = recipe.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase());
              return hasMealType && hasTitle;
            });
            return (
              <div className="recipesCards">
                {recipesToRender.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    search={this.state.search}
                    filter={this.state.filter}
                  />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Recipes;
export { GET_RECIPES_QUERY };
