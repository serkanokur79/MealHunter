import React from "react";
//import YouTube from "react-youtube";
import YouTube from "react-youtube-embed";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Meal.css";

class Meal extends React.Component {
  state = {
    meal: [],
    yId: "",
    cIns: []
  };

  componentDidMount() {
    this.getRecipe();
  }
  getRecipe = async e => {
    const mealId = this.props.location.pathname.split("/")[2];
    const api_call = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await api_call.json();
    this.setState({ meal: data.meals[0] });
    this.setState({ yId: data.meals[0].strYoutube.split("=")[1] });
    this.setState({ cIns: data.meals[0].strInstructions.split("STEP") });
  };

  render() {
    const meal = this.state.meal;
    const youtubeId = this.state.yId;
    const CInstr = this.state.cIns;
    const Ingred = [
      meal.strIngredient1,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
      meal.strIngredient6,
      meal.strIngredient7,
      meal.strIngredient8,
      meal.strIngredient9,
      meal.strIngredient10
    ];
    const Ingred2 = [
      meal.strIngredient11,
      meal.strIngredient12,
      meal.strIngredient13,
      meal.strIngredient14,
      meal.strIngredient15,
      meal.strIngredient16,
      meal.strIngredient17,
      meal.strIngredient18,
      meal.strIngredient19,
      meal.strIngredient20
    ];
    console.log(meal.idMeal);

    return (
      <div className="m-3 mx-auto d-block container0">
        <div className="container1">
          <div>
            <Link to="/" className="btn btn-outline-primary mr-2 mt-2">
              Back to Search Results
            </Link>{" "}
            <a
              href={meal.strSource}
              className="btn btn-outline-secondary ml-2 mt-2"
              target="_blank"
            >
              Source Page
            </a>
          </div>
          <div className="m-2" />
          <div className="m-2">
            <h3>{meal.strMeal}</h3>
            <img
              className="logo shadow-sm p-3 mb-5 bg-white rounded mx-auto d-block"
              src={meal.strMealThumb}
              alt="Logo"
            />
          </div>
          <div className="ml-2 mt-2">
            <div className="container2">
              <div className="col shadow-sm p-3 mb-5 bg-white rounded">
                <p>
                  <b>Meal Category:</b> {meal.strCategory}
                </p>
              </div>

              <div className="col shadow-sm p-3 mb-5 bg-white rounded">
                <b>Meal Origin:</b> {meal.strArea}
              </div>
            </div>

            <div className="container2 shadow-sm p-3 mb-5 bg-white rounded ">
              <div className="col">
                <b>Ingredients:</b>
                <ul>
                  {Ingred.map((value, index) => {
                    return value !== "" ? <li key={index}>{value}</li> : null;
                  })}
                </ul>
              </div>

              <div className="col">
                <p />
                <ul>
                  {Ingred2.map((value, index) => {
                    return value !== "" ? <li key={index}>{value}</li> : null;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <b>Instructions:</b>
            {CInstr.map((ins, index) => {
              return ins !== "" ? <p key={index}> {ins}</p> : null;
            })}
          </div>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <h6>Cooking Video:</h6>
            <div>
              <YouTube id={youtubeId} />
              <p />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Meal;
