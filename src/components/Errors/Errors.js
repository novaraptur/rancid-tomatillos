import React from 'react';
import './Errors.css';

const Errors = ({error}) => {
  return (
    <div className="error-container">
      <h2 className='error-message'>{error}</h2>
    </div>
  )
}

export default Errors;
