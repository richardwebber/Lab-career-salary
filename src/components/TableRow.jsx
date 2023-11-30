
import Description from './Description.jsx';
import Hours from './Hours.jsx';
import ModeButtons from './ModeButtons.jsx';
import Rate from './Rate.jsx';
import formatCurrency from '../utils/formatCurrency.js';
import { useState } from 'react';

const TableRow = (props) => {

  // const {description, rate, hours} = props.initialInvoiceData;
  const {initialInvoiceData, initialEditMode, deleteRow, currentData, setCurrentData} = props

  const [editMode, setIsEditing] = useState(initialEditMode);
  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)

  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {
    const copyData = [...currentData]

    const indexToChange = copyData.findIndex(el => el.id === initialInvoiceData.id)

    const editedRow = {
      id: initialInvoiceData.id,
      description,
      rate,
      hours
    }

    copyData.splice(indexToChange, 1, editedRow)

    setCurrentData(copyData)
  }

  return (
    <tr>
    <ModeButtons 
    isEditing={editMode} 
    changeEditMode={changeEditMode}
    changeNormalMode={changeNormalMode}
    deleteRow={deleteRow}
    />

    <Description 
    isEditing={editMode} 
    value={description}
    onValueChange={setDescription}
    />

    <Rate 
    isEditing={editMode} 
    value={rate}
    onRateChange={setRate}
    />

    <Hours 
    isEditing={editMode} 
    value={hours}
    onHoursChange={setHours}
    />

    <td>{formatCurrency(rate * hours)}</td>
    </tr> 
  );
}

export default TableRow