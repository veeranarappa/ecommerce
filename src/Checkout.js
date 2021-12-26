import React,{useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'
import {Link } from 'react-router-dom';

function Checkout(){

  const [userData, setUserData ] = useState({name: '', mobile: '', email: '', city:'', message:''})

  const handleName =(e) => {
    console.log("data" , e)
    setUserData((preState) => {
        return {
            ...preState,
         [e.target.name]  : e.target.value
        }
    })
}

const handleSubmitForm = (e) => {
  alert(JSON.stringify(userData, null, 3));
  e.preventdefault();
  console.log('submitform', e)
}

    return(
        <div>
<Row>
<Col xs={6}> 
<Form onSubmit={handleSubmitForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Name </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="name" value={userData.name} onChange={handleName}/> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Mobile  </Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile" name="mobile" value={userData.mobile} onChange={handleName} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Email </Form.Label>
    <Form.Control type="text" placeholder="Enter Email" name="email" value={userData.email} onChange={handleName} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>  City </Form.Label>
  <Form.Select name='city' value={userData.city} onChange={handleName}>
  <option> Select City </option>
      <option> Anantapur</option>
      <option> Hyderabad</option>
      <option> Banglore</option>
  </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" rows={3} name="message" value={userData.message} onChange={handleName} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to="/Success">  <Button variant="success"> Submit </Button> </Link>
</Form>
</Col>
<Col xs={6}> 
<div className="box-cart">
<h2> Selected Products</h2>
<div>
  
  <table>
    <tr> 
      <td> Tamoto</td>
      <td> 1kg </td>
      <td> 30</td>
    </tr>
    <tr> 
      <td> Tamoto</td>
      <td> 1kg </td>
      <td> 30</td>
    </tr>
    <tr> 
      <td> Total Items</td>
      <td> 1kg  </td>
      <td>  Total Price </td>
    </tr>
  </table>
</div>
</div>
</Col>
</Row>
   </div>
    )
}
export default Checkout;