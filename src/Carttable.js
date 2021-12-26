import React,{useState} from 'react';

import {Row, Col, Button, Container} from 'react-bootstrap'

function Carttable(props){

    const [counter, setCounter] = useState(0);

    const increment = ()=> {
        setCounter((prestate)=>{
                return prestate + 1;
        })
    }

    const decrement = ()=> {
        if(counter > 1 ){
            setCounter((prestate)=>{
                        return prestate - 1;
                 })
        }
        // setCounter((prestate)=>{
        //         return prestate - 1;
        // })
    }
    

    return(
        
    <tr>
      <td> {props.index+1}</td>
      <td> <img className="img-product-cart" src={props.imgurl}/> </td>
      <td> {props.title}</td>
      <td>
      <Row>
             <Col xs={3}> 
             <Button onClick={decrement} className="w-100" variant="primary">  - </Button>
              </Col>
             <Col xs={6}> {counter} </Col>
             <Col xs={3}> 
             <Button onClick={increment} className="w-100" variant="primary"> + </Button>
             </Col>
             </Row>
      </td>
      <td> {props.price}</td>
      <td> 500 </td>
    </tr>
       
    )
}

export default Carttable;