import React from 'react'

const Hours = (props) => {
  const {isEditing, value, onHoursChange} = props;

  return isEditing ? (
    <td>
      <input 
      type="text" 
      value={value}
      onChange={(e) => onHoursChange(e.target.value)}
      />
    </td>
  ) : (
    <td>
      {value}
    </td>
  )
}

export default Hours