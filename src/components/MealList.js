import React from 'react'

import { Link } from 'react-router-dom'



const MealList = props => (
  <div className="container">
    <div className="row justify-content-around">
      {props.meals == null ?
        <p>No result found</p>
        : props.meals.map(meal => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4" key={meal.idMeal} >
              <div className="card shadow  mb-3 rounded" >
                <div className="card-body">
                  <h5>{meal.strMeal.length > 20 ? `${meal.strMeal.substring(0, 20)}...` : meal.strMeal}</h5>
                  <img className="card-img-top" src={meal.strMealThumb} alt="Logo" />
                  <p><b>Meal Category:</b> {meal.strCategory}</p>
                  <p><b>Meal Origin:</b> {meal.strArea}</p>

                  <p>Meal id: {meal.idMeal}</p>

                  <div className="card-footer text-muted " >
                    <Link
                      to={{ pathname: `/meal/${meal.idMeal}` }}
                      className="btn btn-outline-primary m-2"  >View Recipe</Link>
                    <a href={"https://www.youtube.com/watch?v=" + meal.strYoutube.split('=')[1]} className="btn btn-outline-primary" target="_blank"  >Watch</a>

                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  </div>

);

export default MealList;

