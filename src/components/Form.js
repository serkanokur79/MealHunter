import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = props => {

  return (
    <div className="container">
      <p></p>
      <form onSubmit={props.getRecipe}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4 ">
            <input className="form-control shadow  mb-3 bg-white rounded" type="text" placeholder="food to search" name="searchName" /></div>
          <div className="col-sm-12 col-md-2">
            <button className="btn btn-secondary form-control shadow  mb-3 rounded">Search </button></div>
        </div>
      </form>
      <p></p>
    </div>

  )
}

export default Form
