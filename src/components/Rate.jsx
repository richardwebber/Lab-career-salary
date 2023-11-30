import React from 'react'
import formatCurrency from '../utils/formatCurrency.js';

const Rate = (props) => {
  const {isEditing, value, onRateChange} = props;

  return isEditing ? (
    <td>
      $<input 
        type="text" 
        value={value}
        onChange={(e) => onRateChange(e.target.value)}
      /> /hr
    </td>
  ) : (
    <td>
      {formatCurrency(value)} /hr
    </td>
  )
}

export default Rate