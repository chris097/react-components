import {useState,useEffect} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Excel = () => {
  const [result, setResult] = useState([])
  
        return (
            <div className="container">
                <h3 className="mt-3 text-success"><center>Export React Table Data into EXCEL Sheet</center></h3>
                <div className="row mt-4">
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                   <table className="table" id="table-to-xls">
                    <thead className="thead-dark">
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                        
                            <tr>
                            <td>Christian chiemela</td>
                            <td>chris097</td>
                            <td>christian@gmail.com</td>
                            <td>christian.com</td>
                            </tr>
                         
                       
                    </tbody>   
                </table>
             </div>
            </div>
        );
    }


export default Excel;