import './InvoiceTable.css';
import axios from 'axios'

import AddButton from './AddButton.jsx';
import Description from './Description.jsx';
import Hours from './Hours.jsx';
import ModeButtons from './ModeButtons.jsx';
import Rate from './Rate.jsx';
import TableHeader from './TableHeader.jsx';
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react';


const InvoiceTable = () => {
    // const {initialData} = props;

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/invoices')
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const addRow = () => {

        axios.post('/invoice', {description: 'A really cool job'})
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

        // const dataCopy = [...currentData]

        // const newRow = {
        //     id: globalId,
        //     description: '',
        //     rate: '',
        //     hours: ''
        // }

        // dataCopy.push(newRow)

        // setCurrentData(dataCopy)

        // globalId++;
    }

    const deleteRow = (id) => {
        
        axios.delete(`/invoice/${id}`)
        .then((res)=> {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((thesehands) => {
            console.log(thesehands)
        })

        setCurrentData(filteredData)
    }

    const rows = currentData.map((el) => <TableRow
     initialInvoiceData={el}
     initialEditMode={false}
       key={el.id}
       deleteRow={() => deleteRow(el.id)}
       currentData={currentData}
       setCurrentData={setCurrentData}
       />)

    return (
        <div>
            <table>
                <thead>
                    <TableHeader/>
                </thead>

                <tbody>
                    {rows}
                    {/* <tr>
                        <ModeButtons isEditing={false}/>
                        <Description isEditing={false} value='Pilot'/>
                        <Rate isEditing={false} value='300'/>
                        <Hours isEditing={false} value='6'/>
                    </tr>
                    <tr>
                        <ModeButtons isEditing={true}/>
                        <Description isEditing={true} value='Racing'/>
                        <Rate isEditing={true} value='450'/>
                        <Hours isEditing={true} value='60'/>
                    </tr> */}
                   
                </tbody>
                
                <tfoot>
                    <AddButton addRow={addRow}/>
                </tfoot>
            </table>
        </div>
    )
}

export default InvoiceTable