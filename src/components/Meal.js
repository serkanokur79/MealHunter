import React from "react";
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Footer from './Footer'

const opts = {
  height: 280,
  width: 450,
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    fs: 1,
  }
}

class Meal extends React.Component {
  state = {
    meal: [],
    yId: '',
    cIns: []
  }


  componentDidMount() {
    this.getRecipe();
    let w = window.innerWidth;
  }
  getRecipe = async (e) => {
    const mealId = this.props.location.pathname.split('/')[2];
    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await api_call.json();
    this.setState({ meal: data.meals[0] })
    this.setState({ yId: data.meals[0].strYoutube.split('=')[1] })
    this.setState({ cIns: data.meals[0].strInstructions.split('STEP') })
  }

  render() {
    const meal = this.state.meal;
    const youtubeId = this.state.yId;
    console.log(meal.strYoutube)
    const CInstr = this.state.cIns;
    const Ingred = [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4, meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9, meal.strIngredient10];
    const Ingred2 = [meal.strIngredient11, meal.strIngredient12, meal.strIngredient13, meal.strIngredient14, meal.strIngredient15, meal.strIngredient16, meal.strIngredient17, meal.strIngredient18, meal.strIngredient19, meal.strIngredient20]
    console.log(meal.idMeal);

    return (

      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-11 align-self-center"  >
          <div className="card shadow  mb-3 rounded" >
            <div className="card-body">
              <Link
                to='/'
                className="btn btn-outline-primary" style={{ margin: "0.4rem 0.6rem" }} >Back to Search Results</Link>


              <div class="d-flex flex-column flex-lg-row">

                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-6">
                  <h5>{meal.strMeal}</h5>
                  <div>
                    <p><b>Meal Category:</b> {meal.strCategory}</p>
                    <p><b>Meal Origin:</b> {meal.strArea}</p>
                    <img className="card-img-top" src={meal.strMealThumb} alt="Logo" style={{ maxWidth: '450px' }} />
                  </div>
                  <div >
                    <h6>Cooking Video:</h6>
                    <div style={{ width: '100%' }}>
                      <YouTube
                        videoId={youtubeId}
                        onReady={this._onReady}
                        opts={opts}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-7 col-xl-5">
                  <div><p><b>Ingredients:</b></p>
                    <div className="row">
                      <div className="col"> <ul>
                        {Ingred.map((value, index) => {
                          return (value !== '' ? <li key={index}>{value}</li> : null)
                        })}
                      </ul></div>
                      <div className="col"><ul>
                        {Ingred2.map((value, index) => {
                          return (value !== '' ? <li key={index}>{value}</li> : null)
                        })}
                      </ul></div>
                    </div>
                  </div>
                  <div><p><b>Instructions:</b></p>
                    {CInstr.map((ins, index) => {

                      return (ins !== '' ?
                        <p key={index} > {ins}</p> : null);
                    }
                    )
                    }</div>


                </div>


              </div>

              <div className="card-footer text-muted " >

                <a href={meal.strSource} className="btn btn-outline-primary" target="_blank" style={{ margin: "0.4rem 0.6rem" }} >Source Page</a>
              </div>
            </div>
          </div>
        </div>
        < Footer />
      </div>

    )
  }
}






export default Meal;