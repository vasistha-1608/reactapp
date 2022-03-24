import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import NavigationBar from '../nav/NavigationBar';
import IncDec from './IncDec';

class ViewCart extends Component{
    constructor(props){
        super(props);
        this.state={
            items : []
        }
       
   

    }
    
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                    <NavigationBar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Table>
                    <thead>
                      <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Remove</th>
                      </tr>
                    
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.productId}>
                                <td className="text-break text-break text-center text-wrap">{item.productName}</td>
                                <td className="text-break text-break text-center text-wrap">{item.productPrice}</td>
                                <td><IncDec/> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}
export default ViewCart;