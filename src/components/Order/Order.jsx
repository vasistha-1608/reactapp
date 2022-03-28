import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import NavigationBar from '../nav/NavigationBar';


class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            items : []
        }
       
   

    }
    
    render(){
        return(
            <div>
                <NavigationBar/>
            <Container fluid>

                <Row>
                    <Col>
                    <Table>
                    <thead>
                      <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          
                      </tr>
                    
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.productId}>
                                <td className="text-break text-break text-center text-wrap">{item.productName}</td>
                                <td className="text-break text-break text-center text-wrap">{item.productPrice}</td>
                                <td className="text-break text-break text-center text-wrap">{item.productQuantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                </Row>
                
            </Container>
            <Container>
                <Row>
                    <Col>
                    <Button type ="submit" variant="primary"> Pay </Button>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Order;