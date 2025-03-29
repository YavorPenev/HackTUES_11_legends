import React from 'react';
import './styles/Add.css';

function Add() {
  return (
    <div>
      <h1 className="text-green-500 add-title"><b>Add note</b></h1>
      <div className='add-header'>

      </div>
     <h2>Enter title:</h2>
     <input type='text'></input>
     <h2>Enter text:</h2>
     <input type='text'></input>
     
    </div>
  );
}

export default Add;