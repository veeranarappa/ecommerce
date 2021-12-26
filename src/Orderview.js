import React from 'react'
import {Row, Col,Table, Button,Container} from 'react-bootstrap'
import {Link } from 'react-router-dom';

function Orderview(){
    return(
        <div>
            <h3> Order Details</h3>
            <Table striped bordered hover>
                <tr>
                    <th> Image </th>
                    <th> Title </th>
                    <th> Quantity </th>
                    <th> Total </th>
                </tr>
                <tr>
                <td> <img className="img-order" src={'https://live.staticflickr.com/3160/2962762666_93a2027078_b.jpg'}/> </td>
                    <td> Tamoto</td>
                    <td> 3 Kg </td>
                    <td> 90/- </td>
                </tr>
                <tr>
                <td> <img className="img-order" src={'https://live.staticflickr.com/3160/2962762666_93a2027078_b.jpg'}/> </td>
                    <td> Tamoto</td>
                    <td> 3 Kg </td>
                    <td> 90/- </td>
                </tr>
                <tr>
                <td> <img className="img-order" src={'https://live.staticflickr.com/3160/2962762666_93a2027078_b.jpg'}/> </td>
                    <td> Tamoto</td>
                    <td> 3 Kg </td>
                    <td> 90/- </td>
                </tr>
                <tr>
                <td> <img className="img-order" src={'https://live.staticflickr.com/3160/2962762666_93a2027078_b.jpg'}/> </td>
                    <td> Tamoto</td>
                    <td> 3 Kg </td>
                    <td> 90/- </td>
                </tr>
               
            </Table>
        </div>
    )
} 
export default Orderview;