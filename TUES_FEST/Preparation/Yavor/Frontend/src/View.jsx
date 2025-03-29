import React from 'react';
import './styles/View.css'

function View() {
  return (
    <div>
      <h1 className="text-green-500 view-title"><b>Your Notes</b></h1>
      <div className='view-header'>

      </div>
      <p className="text-red-500" >Here you can view all your notes.</p>
      {/* Добавете логика за показване на бележките */}
    </div>
  );
}

export default View;