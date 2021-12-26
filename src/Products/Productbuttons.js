import React from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'

class Productbuttons extends React.Component{ 
    constructor(){
        super();
        this.state={
            addToCartButton : true,
            count:1
            
        }
        
        }

        addtoCartButtonfale() {
            this.setState({
                addToCartButton: false
            })
        }

        
        increment(){
            this.setState((prevstate)=>{
                return {
                count : prevstate.count + 1
                }
            })
        }

        decrement(){
            if(this.state.count <= 1){
                this.setState((prevstate)=>{
                    return{
                        count:1
                    }
                    
                });
              }else {
                this.setState((prevstate) =>{
                    return{
                        count: prevstate.count - 1
                    }
                    
                });
              }
        }

    
    render(){
    return(
        <div>

            {
                this.state.addToCartButton ? 
                <Button onClick={() => this.addtoCartButtonfale()} className="w-100" variant="primary"> Add To Cart</Button>
                :
                <Row>
             <Col xs={3}> 
             <Button onClick={()=>this.decrement()} className="w-100" variant="primary">  - </Button>
              </Col>
             <Col xs={6}> {this.state.count} </Col>
             <Col xs={3}> 
             <Button onClick={()=>this.increment()} className="w-100" variant="primary"> + </Button>
             </Col>
             </Row>
            }
            
             
        </div>
    )
    }
}
export default Productbuttons;