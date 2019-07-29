import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = props => {
  return (
    <div className='container'>
      <p />

      <div className='row justify-content-center'>
        <div className='col-sm-12 col-md-4 '>
          <input
            onChange={props.getRecipe}
            className='form-control shadow  mb-3 bg-white rounded'
            type='text'
            placeholder='food to search'
            name='searchName'
          />
        </div>
      </div>

      <p />
    </div>
  );
};

export default Form;
